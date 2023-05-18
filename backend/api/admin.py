from django.contrib import admin
from .models import Tarefa,Tag,Categoria,Status

# Register your models here.
admin.site.register(Tarefa)
admin.site.register(Tag)
admin.site.register(Categoria)
admin.site.register(Status)
