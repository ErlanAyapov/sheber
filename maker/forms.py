from django import forms
from maker.models import Product, OrnamentFragment
from django.forms import ModelForm, TextInput, DateTimeInput, Textarea


class OrderForm(forms.ModelForm):
    class Meta:
    	model  = Product
    	fields = ('__all__')


class FragmentAdd(forms.ModelForm):
    class Meta:
        model = OrnamentFragment
        fields = ('__all__')