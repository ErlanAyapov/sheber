from django.urls import path 
from . import views


urlpatterns = [
	path('', views.MainView.as_view(), name = 'main'),
	path('order/detail<int:pk>', views.OrderDetaleView.as_view(), name = 'detail_order'),
	path('order/map<int:pk>', views.OrderMapView.as_view(), name = 'detail_map'),
	path('orders/', views.AllOrderView.as_view(), name = 'all_order'),
	path('.well-known/pki-validation/CD3556AE42075DE27EFA43993599E44D.txt', views.ssl, name = 'ssl'),
]