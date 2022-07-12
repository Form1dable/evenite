from django.urls import path
from events.views import create_event

urlpatterns = [
    path("create-event", create_event, name="create-event")
]
