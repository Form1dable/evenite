import datetime

from django.utils import timezone

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from events.models import Event
from events.serializers import EventSerializer



# PUBLIC ROUTES

@api_view(["GET"])
def get_all_events(request):
    events = Event.objects.all()
    limit = request.GET.get("limit", None)

    if events is not None:
        if limit is not None:
            events = Event.objects.all()[:int(limit)]
            serializer = EventSerializer(events, many=True)
            return Response(serializer.data)

        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def get_event(request, id):
    event = Event.objects.get(pk=id)

    if event is not None:
        serializer = EventSerializer(event)
        return Response(serializer.data)
    return Response(status=status.HTTP_404_NOT_FOUND)



@api_view(["GET"])
def upcoming_events(request):
    limit = request.GET.get("limit", None)
    if limit is not None:
        events = Event.objects.filter(start_date__gte=timezone.now()).order_by("start_date")[:int(limit)]
        if events is not None:
            serializer = EventSerializer(events, many=True)
            return Response(serializer.data)

    events = Event.objects.filter(start_date__gte=timezone.now()).order_by("start_date")

    if events is not None:
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    return Response(status=status.HTTP_404_NOT_FOUND)


# PRIVATE ROUTES

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_event(request):
    serializer = EventSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_event(request, id):
    event = Event.objects.get(pk=id)

    if event is not None:
        serializer = EventSerializer(event, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)



@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_event(request, id):
    return Response({})
