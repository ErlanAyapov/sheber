from django.shortcuts import render, redirect
from django.views.generic import ListView
from main.models import Article
from .forms import OrderForm
from .models import Product


class MakerView(ListView):
	model = Article
	template_name = 'maker/maker.html'


def make_order(request):
	if request.method == 'POST':
		form = OrderForm(request.POST, request.FILES) 
		message = ''
		if form.is_valid():
			form.save(commit = False)
			# form.order_date = datetime.datetime.now()
			
			form.save()
			return redirect('main')
			
	form = OrderForm()
	data = {
		'order':form,
	}
	return render(request, 'maker/order.html', data)


class AllOrders(ListView):
	model = Product
	ordering = '-id'
	template_name = 'maker/all_orders.html'