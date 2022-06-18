from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
	name = models.CharField('Имя категори', max_length = 255)
	slug = models.SlugField(unique = True)
	def __str__(self):
		return self.name
 

class Product(models.Model): 
	category		  = models.ForeignKey(Category, on_delete = models.CASCADE, verbose_name = 'Категрия' )
	comment 		  = models.TextField('Комментарий к заказу')
	price			  = models.DecimalField(max_digits = 9, decimal_places = 0, verbose_name = 'Цена')
	des_image		  = models.TextField('Фото (Base64)', blank = True)
	client_first_name = models.CharField('Имя', max_length = 50, default = 'Anonymous_user')
	client_last_name  = models.CharField('Фамилия', max_length = 50, default = 'Anonymous_user')
	whatsapp 	 	  = models.CharField('Whatsapp', max_length = 15, default = 'Anonymous_user')
	phone_number 	  = models.CharField('Телефон', max_length = 15, default = 'Anonymous_user')
	ip	  			  = models.CharField('Ip', max_length = 50, blank = True)
	date  			  = models.CharField('Время', max_length = 50, blank = True)
	system_info   	  = models.CharField('Системный информация', max_length = 150, default = 'Anonymous_user')
	ornament_info 	  = models.CharField('Использованные узоры', max_length = 90, default = 'Anonymous_user')
	number		  	  = models.DecimalField(max_digits = 9, decimal_places = 0, verbose_name = 'Количесвто', default = 1)
	latitude		  = models.CharField('Широта', max_length = 30, blank = True)
	longitude		  = models.CharField('Долгота', max_length = 30, blank = True)
	sterm 			  = models.DateTimeField(verbose_name = 'Дата оканчание', blank = True, null = True)
	
	def __str__(self):
		return f'{self.client_first_name} {self.client_last_name}: {self.ip}'

class Test(models.Model):
	passname = models.CharField('Тип орнамента', max_length = 255)
	slug = models.SlugField(unique = True)

		
class TypeOfOrnament(models.Model):
	name = models.CharField('Тип орнамента', max_length = 255)
	slug = models.SlugField(unique = True)

	def __str__(self):
		return self.name


class OrnamentFragment(models.Model):
	types 		 = models.ForeignKey(TypeOfOrnament, on_delete = models.CASCADE, verbose_name = 'Тип орнамента' )
	image_base64 = models.TextField('Изоброжение (Base64)')
	price		 = models.DecimalField(max_digits = 9, decimal_places = 2, verbose_name = 'Цена орнамента', default = 5000)

	def __str__(self):
		return str(self.types.name)