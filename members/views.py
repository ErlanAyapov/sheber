from django.shortcuts import render, redirect
from .forms import UserCreateForm, UserUpdateForm, CustomerForm, PremiumSubscribeForm
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout as django_logout 
from django.views.generic import ListView, DetailView, UpdateView
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from .models import Customer, PremiumSubscribe
from datetime import datetime
from maker.models import Product

class UserProfileView(DetailView):
	model = User
	template_name = 'members/profile.html'

	def get_context_data(self, **kwargs): 
		context = super( UserProfileView, self ).get_context_data( **kwargs )
		product = Product.objects.order_by('-id')[0:5] 

		if self.request.user.premiumsubscribe:
			user = self.request.user.premiumsubscribe
			real_year, real_mounth, real_day = map( int, str(datetime.now())[0:10].split('-') )
			end_year, end_mounth, end_day = map( int, str(user.end_subscribe)[0:10].split('-') )
			time_left = ( end_year*360 + end_mounth*30 + end_day ) - ( real_year*360 + real_mounth*30 + real_day )
			if not time_left >= 0:
				context['time_left'] = True
		
		context['time_'] = time_left


		context['product_profile'] = product

		return context

class UserProfileUpdateView(UpdateView):
	model = User
	form_class = UserUpdateForm
	template_name = 'members/profile_update.html'
	def form_valid(self, form):
		form.save()
		return HttpResponseRedirect('/members/user/' + str(self.request.user.id))


class CustomerUpdateView(UpdateView):
	model = Customer
	form_class = CustomerForm
	template_name = 'members/customer_update.html'
	def form_valid(self, form):
		form.save(commit=False)
		form.user = self.request.user
		form.save()
		return HttpResponseRedirect('/members/user/' + str(self.request.user.id))

def register(request):
	error = ''
	if request.method == 'POST':
		form = UserCreateForm(request.POST)
		
		if form.is_valid():
			form.save()
			username = request.POST.get( 'username' )  
			password = request.POST.get( 'password1' )  
			user = authenticate(request, username = username, password = password)
			if user is not None: 
				login(request, user)  
				sub = PremiumSubscribe( user = request.user, start_subscribe = datetime.now(), end_subscribe = datetime.now()) 
				sub.save()	
				customer = Customer( user = request.user, image = 'default')
				customer.save()
				return HttpResponseRedirect('/members/user/' + str(request.user.id))
		else:
			error = 'Пороли не совпадает или логин занят!'
			data = {
				'register_form':form,
				'message':error,
			}
			return render(request, 'members/members.html', data)
	else:
		form = UserCreateForm()
	return render(request, 'members/members.html', {'register_form':form})


def logout(request):
	django_logout(request)
	return redirect('members')


def authentication(request):
	error = ''
	if request.method == 'POST':
		username = request.POST.get('username')
		password = request.POST.get('password')
		user = authenticate(request, username = username, password = password)
		if user is not None: 
			login(request, user)
			return redirect('main')
		else:
			error = 'Логин и пароль не совпадает, повторите попытку!'
			return render(request, 'members/auth.html', {'error':error})	
	return render(request, 'members/auth.html')

'''
def customer_create(request):
	if request.method == 'POST':
		form = CustomerForm(request.POST)
		if form.is_valid():
			form = form.save(commit=False)
			form.user = request.user
			form.save()

			return HttpResponseRedirect('/members/user/' + str(request.user.id))

	form = CustomerForm()
	return render(request, 'members/customer_create.html', {'customer_form':form})
'''