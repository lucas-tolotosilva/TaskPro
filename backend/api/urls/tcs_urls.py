from django.urls import path

from api.views import tcs_views as views

urlpatterns = [
    path('tag/', views.getTags, name='obter_tags'),
]