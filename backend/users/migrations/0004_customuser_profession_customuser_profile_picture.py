# Generated by Django 5.0.6 on 2024-07-03 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_customuser_birthday'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='profession',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='profile_picture',
            field=models.ImageField(blank=True, max_length=200, null=True, upload_to='profile_pictures/'),
        ),
    ]