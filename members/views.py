from django.shortcuts import render, redirect
from .forms import UserCreateForm, UserUpdateForm
from django.contrib.auth import authenticate, login
from django.contrib.auth import logout as django_logout 
from django.views.generic import ListView, DetailView, UpdateView
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect


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
				return HttpResponseRedirect('continu-%23!&$4%3F' + str(request.user.id))
				# return redirect('main')
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


class UserProfileView(DetailView):
	model = User
	template_name = 'members/profile.html'


class UserProfileUpdateView(UpdateView):
    model = User
    form_class = UserUpdateForm
    template_name = 'members/profile_update.html'
    def form_valid(self, form):
        form.save()
        return redirect('main')