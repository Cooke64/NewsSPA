# Generated by Django 4.1.3 on 2022-11-27 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='first_name',
            field=models.TextField(blank=True, max_length=150, null=True, verbose_name='Имя'),
        ),
        migrations.AddField(
            model_name='profile',
            name='last_name',
            field=models.TextField(blank=True, max_length=150, null=True, verbose_name='Фамилия'),
        ),
    ]