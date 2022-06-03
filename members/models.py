from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
	user  = models.OneToOneField(User, on_delete = models.CASCADE, null=False)
	image = models.TextField('Қолданушы суреті')


class PremiumSubscribe(models.Model):
	user  = models.OneToOneField(User, on_delete = models.CASCADE, null=False)
	start_subscribe = models.CharField('Жазылым уақыты', blank = True, max_length = 60)
	end_subscribe = models.DateTimeField('Жазылым уақыты аяқталады', blank = True)

	def __str__(self):
		return str(self.user.username)