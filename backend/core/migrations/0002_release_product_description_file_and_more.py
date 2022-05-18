# Generated by Django 4.0.2 on 2022-02-24 20:10

import core.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Release",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("display_name", models.CharField(max_length=255)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name="product",
            name="description_file",
            field=models.FileField(
                blank=True,
                null=True,
                upload_to=core.models.product.upload_file_products,
            ),
        ),
        migrations.AlterField(
            model_name="product",
            name="description",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="product",
            name="pz_code",
            field=models.CharField(blank=True, max_length=55, null=True),
        ),
        migrations.AlterField(
            model_name="product",
            name="survey",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="producttype",
            name="attributes",
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AddField(
            model_name="product",
            name="release",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.PROTECT,
                related_name="products",
                to="core.release",
            ),
        ),
    ]
