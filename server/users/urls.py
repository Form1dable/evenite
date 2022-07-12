from django.urls import path
from users.views import users, register


urlpatterns = [
    path("", users, name="users"),
    path("register", register, name="register")
]