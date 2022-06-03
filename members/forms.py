from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm, TextInput, DateTimeInput, Textarea, EmailInput
from members.models import Customer, PremiumSubscribe
class UserCreateForm(UserCreationForm):
	class Meta:
		model = User
		fields = ('username', 'password1', 'password2' )


class UserUpdateForm(forms.ModelForm):

	class Meta:
		model = User
		fields = ('username', 'email', 'first_name', 'last_name')
		widgets = {
			'username':   TextInput(attrs={'class': 'form-control','placeholder': 'Қолданушы атауы',}),
			'email': 	  TextInput(attrs={'class': 'form-control','placeholder': 'почта',}),
			'first_name': TextInput(attrs={'class': 'form-control','placeholder': 'Есімі',}),
			'last_name':  TextInput(attrs={'class': 'form-control','placeholder': 'Тегі',}),
			}

class CustomerForm(forms.ModelForm):
	class Meta:
		model = Customer
		fields = ['image']
		exclude = ['user']

class PremiumSubscribeForm(forms.ModelForm):
	class Meta:
		model = PremiumSubscribe
		fields = ['start_subscribe']
		exclude = ['user']
		