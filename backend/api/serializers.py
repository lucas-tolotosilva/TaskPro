from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken 
from .models import Categoria, Tarefa, Tag, Comentario

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

class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = ['texto']

class TarefaSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()
    usuario_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='usuario',
        write_only=True
    )
    tags = TagSerializer(many=True)
    comentarios = ComentarioSerializer(many=True)

    class Meta:
        model = Tarefa
        fields = ['idTarefa', 'descricao', 'dataCriacao', 'status', 'usuario', 'usuario_id', 'tags', 'comentarios']