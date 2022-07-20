from django.urls import path
from users.views import users, register, user, profile


urlpatterns = [
    path("", users, name="users"),
    path("user", user, name="user"),
    path("profile", profile, name="profile"),
    path("register", register, name="register")
]