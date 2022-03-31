from django.shortcuts import render, redirect
from maker.views import get_client_ip
from .forms import FeedbackForm
import datetime


# Create your views here.
def help_view(request):
	return render(request, 'help/help.html')

def feedback(request):
	user_system = request.META['HTTP_USER_AGENT']
	if request.method == 'POST':
		form = FeedbackForm(request.POST)
		if form.is_valid():
			form = form.save(commit = False)
			form.device = user_system
			print(user_system)
			form.date = datetime.datetime.now()
			print(datetime.datetime.now())

			form.save()
			return redirect('main')


	form = FeedbackForm()
	return render(request, 'help/feedback.html', {'feedback_form': form})

