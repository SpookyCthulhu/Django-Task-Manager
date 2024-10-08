from django.urls import path
from .views import Home, Register


urlpatterns = [
    path('register/', Register.as_view(), name='register'),
    path('', Home.as_view()),
]