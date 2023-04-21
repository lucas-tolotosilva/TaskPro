from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import Usuario, Tarefa, Comentario, Tag, Categoria
from django.http.response import JsonResponse
import json
# Create your views here.

class UsuarioView(View):
     
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
         return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        usuarios = list(Usuario.objects.values())
        if len(usuarios) > 0:
             dados = {'message': 'Success','usuarios:':usuarios}
        else:
             dados = {'message':"Usuarios not founded"}
        
        return JsonResponse(dados)
     
    def post(self, request):
        #print(request.body)
        jd = json.loads(request.body)

        Usuario.objects.create(nome=jd['nome'], email=jd['email'], senha=jd['senha'])
        dados = {'message': 'Success'}
        return JsonResponse(dados)

    def put(self, request):
          pass
     
    def delete(self, request):
          pass
