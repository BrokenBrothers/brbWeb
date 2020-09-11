# serializers permite cambiar el formato de los datos para que puedan ser transportados
from rest_framework import serializers
# se importa el modelo que va a ser serializado
from Apps.Portfolio.models import Contact


# Contact serializer(se transforma a un formato que pueda ser transportado)
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact  # modelo que se desea serializar
        fields = '__all__'  # se serializan los atributos del modelo
