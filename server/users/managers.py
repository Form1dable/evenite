from django.contrib.auth.models import BaseUserManager

class CustomUserManager(BaseUserManager):

    # User creation pre-requisite for newly created email field
    def create_user(self, email, username, password, **other_fields):

        # Custom User Manager which will validate the email provided and hash the password before saving into database
        if not email:
            raise ValueError(_("You must provide an email"))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **other_fields)


        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, first_name, last_name, password, **other_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if other_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, username, password, **other_fields)