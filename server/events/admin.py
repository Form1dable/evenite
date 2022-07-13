from django.contrib import admin
from events.models import Event

class EventAdminConfig(admin.ModelAdmin):
    list_display = ("title","id", "coordinator", "start_date", "end_date")



# Register your models here.

admin.site.register(Event, EventAdminConfig)
