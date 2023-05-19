from django.contrib.auth.models import User
from django.db import models

class Categoria(models.Model):
    descricao = models.CharField(max_length=45)
    idCategoria = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.descricao

class Tag(models.Model):
    nomeTag = models.CharField(max_length=45)
    idTag = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.nomeTag

class Status(models.Model):
    status = models.CharField(max_length=45, null=True, blank=True)
    idStatus = models.AutoField(primary_key=True, editable=False)
    def __str__(self):
        return self.status

class Tarefa(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE, null=False, blank=True)
    status = models.ForeignKey(Status, on_delete=models.CASCADE,blank=True, null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE,blank=True, null=True)
    nome = models.CharField(max_length=45, null=True, blank=True)
    descricao = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    idTarefa = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.nome