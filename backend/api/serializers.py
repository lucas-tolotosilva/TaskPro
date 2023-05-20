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
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'

class TarefaSerializer(serializers.ModelSerializer):
    nomeUsuario = serializers.SerializerMethodField(read_only = True)
    nomeTag = serializers.SerializerMethodField(read_only = True)
    status = serializers.SerializerMethodField(read_only = True)
    categoria = serializers.SerializerMethodField(read_only = True)

    def get_nomeUsuario(self, obj):
        name = obj.usuario.first_name
        if name == '':
            name = obj.usuario.email
        
        return name

    def get_nomeTag(self, obj):
        return obj.tag.nomeTag
    
    def get_status(self, obj):
        return obj.status.status
    
    def get_categoria(self, obj):
        return obj.categoria.descricao


    class Meta:
        model = Tarefa
        fields = ['idTarefa', 'nome', 'categoria', 'descricao', 'status', 'nomeUsuario', 'nomeTag']