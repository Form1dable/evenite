from django.contrib.auth.models import BaseUserManager

class CustomUserManager(BaseUserManager):

    # User creation pre-requisite for newly created email field
    def create_user(self, email, username, password, **other_fields):

        # Custom User Manager which will validate the email provided and hash the password before saving into database
        if not email:
            raise ValueError(_("You must provide an email"))

        user = self.model(
            email=self.normalize_email(email),
        )


        user.set_password(password)
        user.save(using=self._db)
        return user

    # Superuser pre-requisite
    def create_superuser(self, email, username, first_name, last_name, password, **other_fields):

        # For the new User model fields that need to be specifically set in order to get elevated access
        other_fields.setdefault("is_superuser", True)
        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_active", True)

        # Validation for superuser
        if other_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must be assigned to is_staff=True"))
        if other_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must be assigned to is_superuser=True"))
        
        return self.create_user(email, username, password, **other_fields)