from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Article
from maker.models import Product
import datetime
from maker.views import get_client_ip


class MainView(ListView):
	model = Article
	ordering = '-id'
	template_name = 'main/index.html'
	def get_context_data(self, **kwargs):
		context = super(MainView, self).get_context_data(**kwargs)
		context['product'] = Product.objects.all()
		return context


class OrderDetaleView(DetailView):
	model = Product
	template_name = 'main/order_detale.html'

	def get_context_data(self, **kwargs):
		context = super(OrderDetaleView, self).get_context_data(**kwargs)

		if str(self.object.ip) == str(get_client_ip(self.request)):

			order_hour, order_minute = map(int, str(self.object.date)[11:-10].split(':'))
			order_date = order_time[:-16]
			real_hour, real_minute = map(int, str(datetime.datetime.now())[11:-10].split(':'))
			real_date = real_time[:-16]

			order_minute = order_hour * 60 + order_minute
			real_minute = real_hour * 60 + real_minute

			if real_date == order_date and real_minute - order_minute <= 60:
				result = 'True'
			else:
				result = 'False'
				
			context['result'] = result
			
		return context