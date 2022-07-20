from django.db import models
from django.db.models.signals import pre_save

from django.dispatch import receiver

from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.utils.text import slugify

from django.core.validators import MaxValueValidator

from users.models import User



class Event(models.Model):
    user_id = models.ForeignKey("users.User", on_delete=models.CASCADE)
    title = models.CharField(_("title"), max_length=150)
    description = models.CharField(_("description"), max_length=750)
    image = models.CharField(default="banner.jpg", max_length=256)
    price = models.FloatField(_("price"), validators=[MaxValueValidator(100)], blank=True, null=True)
    start_date = models.DateTimeField(_("start date"))
    end_date = models.DateTimeField(_("end date"))
    state = models.CharField(_("state"), max_length=100)
    city = models.CharField(_("city"), max_length=100)
    street = models.CharField(_("street"), max_length=100)
    postal = models.CharField(_("postal"), max_length=5)
    slug = models.SlugField(_("slug"), max_length=150)
    participants = models.ManyToManyField(User, related_name="participants")
    following = models.ManyToManyField(User, related_name="following")
    qr = models.CharField(_("qr code"), max_length=256, blank=True, null=True)


    def __str__(self):
        return self.title


# Survey


# Polls

# Signals
@receiver(pre_save, sender=Event)
def event_pre_save_handler(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slugify(instance.title)


