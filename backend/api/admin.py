from django.contrib import admin
from .models import Usuario,Tarefa,Tag,Categoria,Comentario

# Register your models here.
admin.site.register(Usuario)
admin.site.register(Tarefa)
admin.site.register(Tag)
admin.site.register(Categoria)
admin.site.register(Comentario)
