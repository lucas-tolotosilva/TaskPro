from django.urls import path
from .views import UsuarioView
urlpatterns = [
    path('usuario/', UsuarioView.as_view(), name='usuarios'),
]