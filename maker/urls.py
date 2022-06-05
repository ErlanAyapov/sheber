from django.urls import path 
from . import views


urlpatterns = [
	path('order/', views.create_view, name = 'maker'),
	path('ad/', views.create_ad, name = 'maker_ad'),
	path('make-order/', views.make_order, name = 'make_order'),
	path('all-orders/', views.AllOrders.as_view(), name = 'all_orders'),
	path('fragment/', views.add_fragment, name = 'add_fragment'),
	path('order-delete/<int:pk>', views.OrderDeleteView.as_view(), name = 'order_delete'),
]