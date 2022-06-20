from django.urls import path 
from . import views


urlpatterns = [
	path('', views.help_view, name = 'help'), 
	path('documentation-ru/', views.doc_ru_view, name = 'doc_ru'), 
	path('feedback/', views.feedback, name = 'feedback'), 
]