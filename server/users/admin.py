from django.contrib import admin
from users.models import User
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class UserAdminConfig(UserAdmin):
    search_fields = ("email", "username", "first_name", "last_name")
    list_filter = ("email", "username", "first_name", "last_name", "is_staff", "is_active")
    ordering = ("-date_joined", )
    list_display = ("username", "email", "first_name", "last_name", "is_active", "is_staff")

    fieldsets = (
        ("Personal", {'fields': ('email', 'username', 'first_name', "last_name")}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'first_name', "last_name", 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(User, UserAdminConfig)