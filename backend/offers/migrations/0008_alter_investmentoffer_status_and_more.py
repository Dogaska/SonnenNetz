# Generated by Django 5.0.6 on 2024-07-11 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0007_investmentoffer_motivation_projectoffer_motivation_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='investmentoffer',
            name='status',
            field=models.CharField(choices=[('Pre verification', 'Preverification'), ('Active', 'Active'), ('Post verification', 'Postverification'), ('Completed', 'Completed')], default='Pre verification', max_length=20),
        ),
        migrations.AlterField(
            model_name='projectoffer',
            name='status',
            field=models.CharField(choices=[('Pre verification', 'Preverification'), ('Active', 'Active'), ('Post verification', 'Postverification'), ('Completed', 'Completed')], default='Pre verification', max_length=20),
        ),
        migrations.AlterField(
            model_name='surfaceoffer',
            name='status',
            field=models.CharField(choices=[('Pre verification', 'Preverification'), ('Active', 'Active'), ('Post verification', 'Postverification'), ('Completed', 'Completed')], default='Pre verification', max_length=20),
        ),
    ]