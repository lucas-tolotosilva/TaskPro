from django.urls import path

from api.views import investimentos_view as views

urlpatterns = [
    path('', views.getInvestimentos, name='obeter_investimentos'),
    path('create/', views.createInvestimento, name='criar_investimenr'),
    path('<int:pk>/', views.getInvestimento, name='detalhar_investimento'),  
]