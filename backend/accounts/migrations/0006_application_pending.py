# Generated by Django 4.0 on 2022-11-09 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_application_img_application_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='pending',
            field=models.BooleanField(default=True),
        ),
    ]