# Generated by Django 4.0 on 2022-11-10 19:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_remove_application_pending'),
        ('adminside', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slot',
            name='available',
            field=models.BooleanField(blank=True, default=True, null=True),
        ),
        migrations.AlterField(
            model_name='slot',
            name='reservedby',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.application'),
        ),
    ]
