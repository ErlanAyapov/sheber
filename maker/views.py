from django.shortcuts import render, redirect
from django.views.generic import ListView
from main.models import Article
from .forms import OrderForm, FragmentAdd
from .models import Product
from .models import OrnamentFragment, TypeOfOrnament
import pickle
import datetime


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


class MakerView(ListView):
	model = OrnamentFragment
	template_name = 'maker/create.html'


def create_view(request):
	center_ornament = 0
	border_ornament = 0
	types = TypeOfOrnament.objects.all()
	for i in types:
		b = str(i)
		if b == 'Центральный орнамент':
			center_ornament = i.id
		elif b == 'Рамкий':
			border_ornament = i.id

	center_ornament = OrnamentFragment.objects.filter(types = center_ornament)
	border_ornament = OrnamentFragment.objects.filter(types = border_ornament)
	ip = get_client_ip(request)

	data = {
		'center_ornament':center_ornament,
		'border_ornament':border_ornament,
		'ipaddress':ip,
	}
	return render(request, 'maker/create.html', data)



class AllOrders(ListView):
	model = Product
	ordering = '-id'
	template_name = 'maker/all_orders.html'


def make_order(request):
	
	if request.method == 'POST':
		# ip = get_client_ip(request)
		form = OrderForm(request.POST, request.FILES) 
		message = ''
		if form.is_valid():
			form = form.save(commit=False)
			form.date = datetime.datetime.now()
			form.ip = str(get_client_ip(request))
			form.save()
			return redirect('main')
			
	form = OrderForm()
	data = {
		'order':form,
	}
	print('Ip', str(get_client_ip(request)))
	return render(request, 'maker/order.html', data)


def add_fragment(request):
	if request.method == 'POST':
		form = FragmentAdd(request.POST)
		if form.is_valid():
			form.save(commit = False)
			form.save()
			return redirect('main')

	form = FragmentAdd()
	data = {
		'fragment_form': form
	}
	return render(request, 'maker/add_fragments.html', data)