from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
	user  = models.ForeignKey(User, on_delete = models.CASCADE)
	image = models.ImageField('Қолданушы суреті', upload_to = 'image/user/')