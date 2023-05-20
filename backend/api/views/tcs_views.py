from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from ..models import Status, Tag, Categoria
from django.contrib.auth.models import User
from api.serializers import TagSerializer,CategoriaSerializer, StatusSerializer

from rest_framework import status

@api_view(['GET'])
def getTags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getStatus(request):
    status = Status.objects.all()
    serializer = StatusSerializer(status, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCategoria(request):
    categorias = Categoria.objects.all()
    serializer = CategoriaSerializer(categorias, many=True)
    return Response(serializer.data)

