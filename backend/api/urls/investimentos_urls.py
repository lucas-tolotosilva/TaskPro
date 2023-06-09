from django.urls import path

from api.views import investimentos_views as views

urlpatterns = [
    # path('', views.getInvestimentos, name='obter_investimentos'),
    path('create/', views.createInvestimento, name='criar_investimentos'),
    # path('<int:pk>/', views.getInvestimento, name='detalhar_investimento'),  
]