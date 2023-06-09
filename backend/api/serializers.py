from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Investimento

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



class InvestimentoSerializer(serializers.ModelSerializer):
    valor_inicial = serializers.DecimalField(max_digits=10, decimal_places=2)
    taxa_juros = serializers.DecimalField(max_digits=5, decimal_places=4)
    periodo = serializers.IntegerField(min_value=1)
    valor_total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Investimento
        fields = ('id', 'valor_inicial', 'taxa_juros', 'periodo', 'valor_total')

    
    def validate(self, attrs):
        valor_inicial = attrs.get('valor_inicial')
        taxa_juros = attrs.get('taxa_juros')
        periodo = attrs.get('periodo')

        valor_total = self.get_valor_total(valor_inicial, taxa_juros, periodo)
        attrs['valor_total'] = valor_total

        return attrs

    def get_valor_total(self, valor_inicial, taxa_juros, periodo):
        valor_total = valor_inicial * (1 + taxa_juros) ** periodo
        return round(valor_total, 2)
