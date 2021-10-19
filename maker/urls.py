from django.urls import path 
from . import views


urlpatterns = [
	path('', views.MakerView.as_view(), name = 'maker'),
	path('make-order/', views.make_order, name = 'make_order'),
	path('all-orders/', views.AllOrders.as_view(), name = 'all_orders')
]