from rest_framework import serializers

from django.contrib.auth.hashers import make_password

from users.models import User, Profile


class UserSerializer(serializers.ModelSerializer):
    # Model serializer lets us define a serializer with a model instance
    class Meta:
        # Specifying the model will give access of the different model fields which later can be serialized
        model = User

        # Lists the required fields for the serializer which will be validated
        fields = ["id", "username", "email","first_name", "last_name", "password"]

        # Makes password only writeale and cannot be queried
        extra_kwargs = {
            "password": {"write_only": True}
        }


    # Create runs everytime an instance is saved
    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"

