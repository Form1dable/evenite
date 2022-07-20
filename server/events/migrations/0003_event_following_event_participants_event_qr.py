# Generated by Django 4.0.6 on 2022-07-17 22:38

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('events', '0002_remove_event_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='following',
            field=models.ManyToManyField(related_name='following', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='event',
            name='participants',
            field=models.ManyToManyField(related_name='participants', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='event',
            name='qr',
            field=models.CharField(blank=True, max_length=256, null=True, verbose_name='qr code'),
        ),
    ]