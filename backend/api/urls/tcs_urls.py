from django.urls import path

from api.views import tcs_views as views

urlpatterns = [
    path('tag/', views.getTags, name='obter_tags'),
    path('status/', views.getStatus, name='obter_status'),
    path('categoria/', views.getCategoria, name='categorias'),
]