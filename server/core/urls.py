from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("users/", include("users.urls")),
    path("events/", include("events.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path('docs/', include_docs_urls(title='Evenite API')),

    # Provided by djangorestframework-simplejwt
    # This hooks onto the with the django auth model and provides a post response
    # Successfull post response with email and password from the user model will provide access and refresh token
    path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
]
