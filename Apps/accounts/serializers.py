# serializers permite cambiar el formato de los datos para que puedan ser transportados
from rest_framework import serializers
# importacion del modelo que va a ser serializado
from django.contrib.auth.models import User
# sistema propio de django que permite las autorizaciones y las autenticaciones
# si deseas saber más, visita el siguiente sitio https://docs.djangoproject.com/en/3.1/topics/auth/
from django.contrib.auth import authenticate

# UserSerializer hace uso de serializers.ModelSerializer que permite serializar un modelo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # modelo user serializado
        # se serializaran los estos atributos del modelo user
        fields = ('id', 'username', 'email')

# # RegisterSerializer hace uso de serializers.ModelSerializer que permite serializar un modelo


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # modelo serializado
        # se serializaran los estos atributos del modelo user
        fields = ('id', 'username', 'email', 'password')
        # extra_kwargs permite serializar palabras clave, en este caso el password
        extra_kwargs = {'password': {'write_only': True}}
    # permite crear el objeto en la

    def create(self, validated_data):  # se crea el objeto con los atributos de entrada
        user = User.objects.create_user(validated_data['username'],  # validated_data calida el tipo de datos de los datos
                                        validated_data['email'],
                                        validated_data['password'])
        return user


# LoginSerializer hace uso de  serializers.Serializer que permite serializar atributos

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()  # se serializa el campo username
    password = serializers.CharField()  # se serializa el campo password

    # permite validad los argumentos de un diccionario de datos en este caso data

    def validate(self, data):
        # se hace uso de authenticate de django que permite autenticar al usuario con los datos
        user = authenticate(**data)
        if user and user.is_active:  # se pregunta si el usuario con esas crdenciales esta autenticado y se encuentra activo
            return user
        # de lo contrario regresa un error de credenciales
        raise serializers.ValidationError("Incorrect Credentials")
