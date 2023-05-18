from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken 
from .models import Categoria, Tarefa, Tag, Status

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name','password', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        
        return name
    
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only = True)
   
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'password', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['idCategoria', 'descricao']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['nomeTag']

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = ['texto']

class TarefaSerializer(serializers.ModelSerializer):
    nomeUsuario = UserSerializerWithToken(read_only= True, source="user.name")
    nomeTag = TagSerializer(read_only= True, source="Tag.name")
    status = StatusSerializer(read_only= True, source="Status.status")

    class Meta:
        model = Tarefa
        fields = ['idTarefa', 'nome', 'descricao', 'status', 'nomeUsuario', 'nomeTag', 'comentario']