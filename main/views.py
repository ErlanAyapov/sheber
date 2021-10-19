from django.shortcuts import render
from django.views.generic import ListView
from .models import Article

# def MainView(request):
# 	return render(request, 'main/index.html')

class MainView(ListView):
	model = Article
	ordering = '-id'
	template_name = 'main/index.html'
	# def get_context_data(self, **kwargs):
	# 	context = super(MainView, self).get_context_data(**kwargs)
	# 	context['comment'] = Comment.objects.all()
	# 	return context