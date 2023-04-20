from django.db import models

# Create your models here.
class Usuario(models.Model):
    idUsuario = models.BigAutoField(primary_key=True)
    nome = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    senha = models.CharField(max_length=45)

class Categoria(models.Model):
    idCategoria = models.BigAutoField(primary_key=True)
    descricao = models.CharField(max_length=45)

class Tarefa(models.Model):
    idTarefa = models.BigAutoField(primary_key=True)
    descricao = models.CharField(max_length=45)
    dataCriacao = models.DateField()
    status = models.CharField(max_length=45)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class Tag(models.Model):
    tarefa = models.OneToOneField(Tarefa,on_delete=models.CASCADE,primary_key=True)
    nomeTag = models.CharField(max_length=45)

class Comentario(models.Model):
    tarefa = models.OneToOneField(Tarefa, on_delete=models.CASCADE, primary_key=True)
    texto = models.CharField(max_length=45)