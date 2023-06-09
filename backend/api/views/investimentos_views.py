from rest_framework import generics
from .models import Investimento
from .serializers import InvestimentoSerializer

class InvestimentoListCreateView(generics.ListCreateAPIView):
    queryset = Investimento.objects.all()
    serializer_class = InvestimentoSerializer

class InvestimentoRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Investimento.objects.all()
    serializer_class = InvestimentoSerializer
