from django.urls import path 
from . import views


urlpatterns = [
	path('', views.MainView.as_view(), name = 'main'),
	path('order/detail<int:pk>', views.OrderDetaleView.as_view(), name = 'detail_order'),
]