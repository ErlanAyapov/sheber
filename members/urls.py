from django.urls import path 
from . import views


urlpatterns = [
	path('', views.register, name = 'members'),
	path('authentication/', views.authentication, name = 'auth'),
	path('user-#!&$4?<int:pk>/', views.UserProfileView.as_view(), name = 'profile'),
	path('logout/', views.logout, name = 'logout'),
	path('continu-#!&$4?<int:pk>/', views.UserProfileUpdateView.as_view(), name = 'register_continu')
]