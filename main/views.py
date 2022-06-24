from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView
from .models import Article
from maker.models import Product, OrnamentFragment
import datetime
from maker.views import get_client_ip
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
import folium
from django.http import HttpResponse

def get_user_map(latitude, longitude, name): 
	m = folium.Map( location=[eval(latitude), eval(longitude)], zoom_start = 50)
	folium.Marker([eval(latitude), eval(longitude)],popup = f"<strong>Заказчик:</strong> {name}",toolkit = f'Sheber Freelance',).add_to(m)
	order_map: str = m.get_root().render() 
	return order_map

class MainView(ListView):
	model = Article
	ordering = 'id'
	template_name = 'main/index.html' 


class AllOrderView(ListView):
	model = Product
	ordering = '-id'
	template_name = 'main/all_orders.html'

	def get_context_data(self, **kwargs):
		context = super(AllOrderView, self).get_context_data( **kwargs )
		print('time_left')
		if self.request.user.premiumsubscribe:
			user = self.request.user.premiumsubscribe
			real_year, real_mounth, real_day = map( int, str(datetime.datetime.now())[0:10].split('-') )
			end_year, end_mounth, end_day = map( int, str(user.end_subscribe)[0:10].split('-') )
			time_left = ( end_year*360 + end_mounth*30 + end_day ) - ( real_year*360 + real_mounth*30 + real_day )

			print(time_left, 'asdasd')
			if not time_left >= 0:
	 			context['time_left'] = True

		return context


class OrderDetaleView(DetailView):
	model = Product
	template_name = 'main/order_detale.html'

	def get_context_data(self, **kwargs): 
		if self.object.category.name == 'Көрпеше':
			context = super( OrderDetaleView, self ).get_context_data( **kwargs )
			ornament_fragment = OrnamentFragment.objects.all()
			border_img, center_img = self.object.ornament_info.split()
			for i in ornament_fragment:
				if i.image_base64[-50:-20] == border_img:
					border_img = i.image_base64
				elif i.image_base64[-50:-20] == center_img:
					center_img = i.image_base64  

			if str( self.object.ip ) == str( get_client_ip( self.request ) ) and str( self.object.system_info)  == str( self.request.META['HTTP_USER_AGENT'] ):
				order_hour, order_minute = map( int, str( self.object.date )[11:-10].split(':') )
				order_date = str( self.object.date )[:-16]
				real_hour, real_minute = map( int, str( datetime.datetime.now() )[11:-10].split(':') )
				real_date = str( datetime.datetime.now() )[:-16] 
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

class OrderMapView(DetailView):
	model = Product 
	template_name = 'main/order_map.html' 

	def get_context_data(self, **kwargs):
		global template_name, b
		context = super( OrderMapView, self ).get_context_data( **kwargs )
		context['map'] = order_map = get_user_map(self.object.longitude, self.object.latitude, self.object.client_first_name)
		 
		return context 
def ssl(request):
	f = open('.well-known/pki-validation/CD3556AE42075DE27EFA43993599E44D.txt', 'r')
	file_content = f.read()
	f.close()
	return HttpResponse(file_content, content_type="text/plain")
	# return render(request, 'main/CD3556AE42075DE27EFA43993599E44D.txt')