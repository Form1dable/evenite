from rest_framework import serializers
from users.models import User, Profile


class UserSerializer(serializers.ModelSerializer):
    # Model serializer lets us define a serializer with a model instance
    class Meta:
        # Specifying the model will give access of the different model fields which later can be serialized
        model = User

        # Lists the required fields for the serializer which will be validated
        fields = ["id", "username", "email", "password"]

        # Makes password only writeale and cannot be queried
        extra_kwargs = {
            "password": {"write_only": True}
        }


        # Create runs everytime an instance is saved
        def create(self, validated_data):
            password = validated_data.pop("password", None)

            # Instance is the actual instance which is created during serialization save
            instance = self.Meta.model(**validated_data)

            if password is not None:
                instance.set_password(password)
            instance.save()

            return instance