# Generated by Django 4.2 on 2023-06-09 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_investimento_valor_total'),
    ]

    operations = [
        migrations.AlterField(
            model_name='investimento',
            name='valor_total',
            field=models.DecimalField(blank=True, decimal_places=8, max_digits=20, null=True),
        ),
    ]
