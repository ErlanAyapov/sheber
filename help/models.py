from django.db import models

# Create your models here.
class Feedback(models.Model):
	message = models.TextField('Ошибка')
	email	= models.EmailField('Почта')
	device	= models.CharField('Устройства', max_length = 100)
	date 	= models.CharField('Время', max_length = 100)
	image 	= models.TextField('Скриншот', blank = True)

	def __str__(self):
		return self.message


	class Meta:
		verbose_name = 'Вопрос'
		verbose_name_plural = 'Вопросы'