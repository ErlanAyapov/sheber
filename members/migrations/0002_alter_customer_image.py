# Generated by Django 3.2.8 on 2022-04-03 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='image',
            field=models.TextField(verbose_name='Қолданушы суреті'),
        ),
    ]
