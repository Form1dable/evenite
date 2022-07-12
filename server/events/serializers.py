from rest_framework import serializers
from events.models import Event
from django.utils.text import slugify


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"