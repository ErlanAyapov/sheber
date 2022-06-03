from django.urls import path 
from . import views


urlpatterns = [
	path('', views.register, name = 'members'),
	path('authentication/', views.authentication, name = 'auth'),
	path('user/<int:pk>/', views.UserProfileView.as_view(), name = 'profile'),
	path('logout/', views.logout, name = 'logout'),
	path('update-#!&$4?<int:pk>/', views.UserProfileUpdateView.as_view(), name = 'user_continu'),
	path('update-customer/<int:pk>/', views.CustomerUpdateView.as_view(), name = 'customer_update'),
	# path('customer/', views.customer_create, name = 'customer_add'),
]