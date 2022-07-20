from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users.models import User, Profile
from users.serializers import UserSerializer


from users.serializers import UserSerializer
# Create your views here.


@api_view(["GET"])
def users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user(request):
    user = User.objects.get(username=request.user)

    print(request.user)

    if user is not None:
        serializer = UserSerializer(user)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)



@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    return



@api_view(["POST"])
def register(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        if user:
            # Rest Framework provides status codes for standardized messages
            return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
