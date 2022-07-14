from django.urls import path
from events.views import create_event, update_event, get_event, get_all_events, upcomming_events

urlpatterns = [
    path("", get_all_events, name="events"),
    path("create-event", create_event, name="create-event"),
    path("update-event/<int:id>", update_event, name="update-event"),
    path("event/<int:id>", get_event, name="event"),
    path("upcomming-events", upcomming_events, name="upcomming-events")
]
