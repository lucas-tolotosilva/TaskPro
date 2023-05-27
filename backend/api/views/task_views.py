from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from ..models import Tarefa, Status, Tag, Categoria
from django.contrib.auth.models import User
from api.serializers import TarefaSerializer, CreateTarefaSerializer

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
    data = request.data

    serializer = CreateTarefaSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteTask(request, pk):
        tarefa = Tarefa.objects.get(idTarefa=pk)
        tarefa.delete()
        return Response('Tarefa Removida')

@api_view(['PUT'])
def updateTask(request, pk):
    try:
        tarefa = Tarefa.objects.get(pk=pk)
        serializer = CreateTarefaSerializer(tarefa, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Tarefa.DoesNotExist:
        return Response({'detail': 'Tarefa não encontrada.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception:
        return Response({'detail': 'Não foi possível atualizar a tarefa.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
