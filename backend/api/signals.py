from django.db.models.signals import pre_save
from django.contrib.auth.models import User

#Envia um sinal, nesse caso antes de salvar alguma alteração do usuário
#Funciona como um listener

def updateUser(sender, instance, **kwargs):
    user = instance 
    if user.email != '':
        user.username = user.email

pre_save.connect(updateUser, sender=True)