from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from events.models import Event
from events.serializers import EventSerializer

# Create your views here.


@api_view(["POST"])
def create_event(request):
    serializer = EventSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)