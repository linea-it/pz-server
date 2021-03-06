# Generated by Django 4.0.2 on 2022-06-14 22:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_product_internal_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductContent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('column_name', models.CharField(max_length=256, verbose_name='Column Name')),
                ('ucd', models.CharField(blank=True, default=None, help_text='The standard unified content descriptor.', max_length=128, null=True, verbose_name='UCD')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='core.product')),
            ],
        ),
    ]
