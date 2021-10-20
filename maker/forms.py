from django import forms
from maker.models import Product
from django.forms import ModelForm, TextInput, DateTimeInput, Textarea


class OrderForm(forms.ModelForm):
    class Meta:
    	model  = Product
    	fields = ('category', 'comment', 'custom', 'image', 'price', 'salesman', 'des_image')

    	# widgets = {
    	# 	'comment': Textarea  (attrs={'class': 'order-form', 'placeholder': 'Комментарий к заказу',}) 
    	# 	'price':   TextInput (attrs={'class': 'order-form', 'placeholder': 'Комментарий к заказу',}) 
    	# }
    	# exclude = ['custom', 'category']
