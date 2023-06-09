from django.contrib.auth.models import User
from django.db import models

class Investimento(models.Model):
    valor_inicial = models.DecimalField(max_digits=10, decimal_places=2)
    taxa_juros = models.DecimalField(max_digits=5, decimal_places=2)
    periodo = models.IntegerField()
    retorno = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def calcular_retorno(self):
        taxa_decimal = self.taxa_juros / 100
        retorno = self.valor_inicial * ((1 + taxa_decimal) ** self.periodo - 1)
        return round(retorno, 2)

    def save(self, *args, **kwargs):
        self.retorno = self.calcular_retorno()
        super().save(*args, **kwargs)