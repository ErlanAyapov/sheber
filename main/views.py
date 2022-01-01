from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Article
from maker.models import Product
# def MainView(request):
# 	return render(request, 'main/index.html')

class MainView(ListView):
	model = Article
	ordering = '-id'
	template_name = 'main/index.html'
	def get_context_data(self, **kwargs):
		context = super(MainView, self).get_context_data(**kwargs)
		context['product'] = Product.objects.all()
		return context


class OrderDetaleView(DetailView):
	model = Product
	ordering = '-id'
	template_name = 'main/order_detale.html'