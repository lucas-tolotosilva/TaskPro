from django.urls import path

from api.views import task_views as views

urlpatterns = [
    path('', views.getTasks, name='obter_tarefas'),
    path('create/', views.createTask, name='criar_tarefas'),
    path('<int:pk>/', views.getTask, name='detalhar_tarefa'),
    
]