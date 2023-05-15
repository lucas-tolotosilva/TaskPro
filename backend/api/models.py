from django.contrib.auth.models import User
from django.db import models

class Categoria(models.Model):
    idCategoria = models.BigAutoField(primary_key=True)
    descricao = models.CharField(max_length=45)

class Tarefa(models.Model):
    idTarefa = models.BigAutoField(primary_key=True)
    descricao = models.CharField(max_length=45)
    dataCriacao = models.DateField()
    status = models.CharField(max_length=45)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

class Tag(models.Model):
    tarefa = models.OneToOneField(Tarefa, on_delete=models.CASCADE, primary_key=True)
    nomeTag = models.CharField(max_length=45)

class Comentario(models.Model):
    tarefa = models.OneToOneField(Tarefa, on_delete=models.CASCADE, primary_key=True)
    texto = models.CharField(max_length=45)