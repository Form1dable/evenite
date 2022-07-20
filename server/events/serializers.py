from rest_framework import serializers
from events.models import Event
from users.models import User
from django.utils.text import slugify


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ["id", "user_id", "title", "description", "price", "start_date", "end_date", "state", "city", "street", "postal"]

        def create(self, validated_data):
            return Event(**validated_data)

        def update(self, instance, validated_data):
            instance.title = validated_data.get("title", instance.email)
            instance.description = validated_data.get("description", instance.email)
            instance.price = validated_data.get("price", instance.price)
            instance.start_date = validated_data.get("start_date", instance.start_date)
            instance.end_date = validated_data.get("end_date", instance.end_date)
            instance.state = validated_data.get("state", instance.state)
            instance.city = validated_data.get("city", instance.city)
            instance.street = validated_data.get("street", instance.street)
            instance.postal = validated_data.get("postal", instance.postal)
            instance.participants = validated_data.get("participants", instance.participants)
            instance.following = validated_data.get("following", instance.following)

            instance.save()

            return instance