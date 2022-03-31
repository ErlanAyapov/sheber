from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView
from .models import Article
from maker.models import Product, OrnamentFragment
import datetime
from maker.views import get_client_ip
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy


class MainView(ListView):
	model = Article
	ordering = 'id'
	template_name = 'main/index.html' 


class OrderDetaleView(DetailView):
	model = Product
	template_name = 'main/order_detale.html'

	def get_context_data(self, **kwargs):
		print(self.object.category.name)
		if self.object.category.name == 'Көрпеше':
			context = super(OrderDetaleView, self).get_context_data(**kwargs)
			ornament_fragment = OrnamentFragment.objects.all()
			border_img, center_img = self.object.ornament_info.split()
			for i in ornament_fragment:
				if i.image_base64[-50:-20] == border_img:
					border_img = i.image_base64
				elif i.image_base64[-50:-20] == center_img:
					center_img = i.image_base64  

			if str(self.object.ip) == str(get_client_ip(self.request)) and str(self.object.system_info) == str(self.request.META['HTTP_USER_AGENT']):
				order_hour, order_minute = map(int, str(self.object.date)[11:-10].split(':'))
				order_date = str(self.object.date)[:-16]
				real_hour, real_minute = map(int, str(datetime.datetime.now())[11:-10].split(':'))
				real_date = str(datetime.datetime.now())[:-16] 
				real_minute_1 = real_minute
				order_minute = order_hour * 60 + order_minute
				real_minute = real_hour * 60 + real_minute

				if real_date == order_date and real_minute - order_minute <= 60:
					result = 'True'
					context['dead_line']  = str(60 - (real_minute - order_minute))

				else:
					result = 'False'
					real_hour = 23 + (int(real_date[8:]) - int(order_date[8:]))
					real_minute = real_hour * 60 + real_minute_1
					if real_minute - order_minute <= 60:
						result = 'True'
						context['dead_line']  = str(60 - (real_minute - order_minute))

					
				context['result'] = result

			context['border_img'] = border_img
			context['center_img'] = center_img
			return context