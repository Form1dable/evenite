# Generated by Django 4.0.6 on 2022-07-12 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_first_name_user_last_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='date_created',
            new_name='date_joined',
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=50, verbose_name='last name'),
        ),
    ]
