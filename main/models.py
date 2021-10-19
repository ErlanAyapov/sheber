from django.db import models

class Article(models.Model):

	title  = models.CharField('Тақырып', max_length = 170)
	body   = models.TextField('Мәтін')
	image  = models.ImageField(upload_to = 'image', blank = True)
	date   = models.CharField('Уақыты', max_length = 170, blank = True)

	def __str__(self):
		return self.title