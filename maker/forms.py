from django import forms
from maker.models import Product, OrnamentFragment
from django.forms import ModelForm, TextInput, DateTimeInput, Textarea


class OrderForm(forms.ModelForm):
    class Meta:
        model  = Product
        fields = (
            'category', 
            'comment', 
            'price', 
            'des_image',
            'client_first_name',
            'client_last_name',
            'whatsapp',
            'phone_number',
            'ornament_info',
            'number',
            'latitude',
            'longitude',
            )

        exclude = ['ip', 'date', 'system_info']


class FragmentAddForm(forms.ModelForm):
    class Meta:
        model = OrnamentFragment
        fields = ('__all__')


class MakeAdForm(forms.ModelForm):
    class Meta:
        model  = Product
        fields = (
            'category',
            'comment',
            'price',
            'des_image',
            'client_first_name',
            'client_last_name',
            'system_info',
        )
        exclude = ['ip', 'date']