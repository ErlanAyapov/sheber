# Generated by Django 3.2.8 on 2022-02-03 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('maker', '0008_alter_product_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=0, max_digits=9, verbose_name='Цена'),
        ),
    ]
