from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
	name = models.CharField('Имя категори', max_length = 255)
	slug = models.SlugField(unique = True)
	def __str__(self):
		return self.name


class Product(models.Model):
	
	category	= models.ForeignKey(Category, on_delete = models.CASCADE, verbose_name = 'Категрия' )
	comment 	= models.TextField('Комментарий к заказу')
	image		= models.ImageField('Дизайн', upload_to = 'image/product/', blank = True)
	price		= models.DecimalField(max_digits = 9, decimal_places = 2, verbose_name = 'Цена')
	custom		= models.ForeignKey(User, on_delete = models.CASCADE, verbose_name = 'Покупатель', related_name='custom')
	salesman	= models.ForeignKey(User, on_delete = models.CASCADE, verbose_name = 'Продавец')
	des_image	= models.TextField('Image', blank = True)

	def __str__(self):
		return f'Покупатель: {self.custom.first_name} {self.custom.last_name}'