from django.urls import path 
from . import views


urlpatterns = [
	path('', views.create_view, name = 'maker'),
	path('make-order/', views.make_order, name = 'make_order'),
	path('all-orders/', views.AllOrders.as_view(), name = 'all_orders'),
	path('add-fragment/', views.add_fragment, name = 'add_fragment')

]