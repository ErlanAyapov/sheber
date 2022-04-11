from django.shortcuts import render, redirect
from .forms import UserCreateForm, UserUpdateForm, CustomerForm
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout as django_logout 
from django.views.generic import ListView, DetailView, UpdateView
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from .models import Customer


class UserProfileView(DetailView):
	model = User
	template_name = 'members/profile.html'


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
			username = request.POST.get('username')  
			password = request.POST.get('password1')  
			user = authenticate(request, username = username, password = password)
			if user is not None: 
				login(request, user) 
				return redirect('customer_add')
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