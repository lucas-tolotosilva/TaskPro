from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from ..models import Tarefa, Status, Tag, Categoria
from django.contrib.auth.models import User
from api.serializers import TarefaSerializer

from rest_framework import status

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTasks(request):
    usuario = request.user.id
    tarefas = Tarefa.objects.filter(usuario = usuario)
    serializer = TarefaSerializer(tarefas, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTask(request, pk):
    tarefa = Tarefa.objects.get(idTarefa = pk)
    serializer = TarefaSerializer(tarefa, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createTask(request):
    serializer = TarefaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def detailTask(request, id):
    try:
        tarefa = Tarefa.objects.get(idTarefa=id)
    except Tarefa.DoesNotExist:
        message = {'detail': 'Tarefa não existe'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = TarefaSerializer(tarefa)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = TarefaSerializer(tarefa, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    elif request.method == 'DELETE':
        tarefa.delete()
        return Response(status=204)