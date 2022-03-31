from django import forms
from .models import Feedback
from django.forms import ModelForm, TextInput, DateTimeInput, Textarea


class FeedbackForm(forms.ModelForm):
	class Meta:
		model  = Feedback
		fields = ('message', 'email', 'image')
		exclude = ['device', 'date']