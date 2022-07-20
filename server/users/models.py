from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from users.managers import CustomUserManager


class User(AbstractBaseUser, PermissionsMixin):
    # Extended AbstractBaseUser which will use email as the primary identified

    email = models.EmailField(_("email address"), max_length=150, unique=True)
    username = models.CharField(_("username"), max_length=20, unique=True)
    first_name = models.CharField(_("first name"), max_length=50, blank=True)

    # Additional field last_name is added to the extended User class
    last_name = models.CharField(_("last name"), max_length=50, blank=True)
    date_joined = models.DateTimeField(default=timezone.now)

    # Mandatory field for the superuser to be able to work
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    # Model manager which will perform functions before a model is saved into database
    objects = CustomUserManager()

    # Specifies the primary user instance identifier
    USERNAME_FIELD = "email"

    # Required fields when creating a super user
    REQUIRED_FIELDS =  ["username", "first_name", "last_name"]

    def __str__(self):
        return self.username


class Profile(models.Model):
    class CampusLocation(models.TextChoices):
        HG = ("HA", "Hagen")
        SO = ("SO", "Soest")
        IL = ("IL", "Iserlohn")
        LS =  ("LU", "Lüdenscheid")
        MS = ("MS", "Meschede")


    class Program(models.TextChoices):
        BI = ("BI", _("Business Administration with Informatics"))
        EE = ("EE", _("Electrical Engineering"))
        IE = ("IE", _("Industrial Engineering"))
        CS = ("CS", _("Applied Computer Science"))


    class Degree(models.TextChoices):
        MS = ("MSc", _("Masters"))
        Bachelors = ("BSc", _("Bachelors"))


    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    campus = models.CharField(max_length=2, choices=CampusLocation.choices)
    program = models.CharField(max_length=2, choices=Program.choices)
    phone = models.CharField(_("phone"), max_length=12, blank=True, null=True)
