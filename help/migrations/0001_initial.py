# Generated by Django 3.2.8 on 2022-03-24 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField(verbose_name='Ошибка')),
                ('email', models.EmailField(max_length=254, verbose_name='Почта')),
                ('device', models.CharField(max_length=50, verbose_name='Устройства')),
                ('date', models.CharField(max_length=20, verbose_name='Время')),
                ('image', models.TextField(verbose_name='Скриншот ')),
            ],
            options={
                'verbose_name': 'Вопрос',
                'verbose_name_plural': 'Вопросы',
            },
        ),
    ]
