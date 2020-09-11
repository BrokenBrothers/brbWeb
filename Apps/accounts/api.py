
# permissions permite verificar los permisos que va a tener la clase (vea el siguiente link si desea saber que tipo de permisos hay)
# https://www.django-rest-framework.org/api-guide/permissions/
from rest_framework import generics, permissions
from rest_framework.response import Response
# AuthToken token que permite realizar peticiones a la API dependiendo de sus permisos.
from knox.models import AuthToken
# se importan los serializadores de la api
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer


# generics.GenericAPIView permite crear una vista basa en clase con las caracteristicas de una API rest
class RegisterAPI(generics.GenericAPIView):
    # serializer_class permite utilizar un modelo de serializacion diferente para esta clase en este caso RegisterSerializer
    serializer_class = RegisterSerializer

    # este metodo se lanza cuando se realiza un post, este recibe
    # request que trae los datos del post
    # self que permite hacer referencia a esta clase
    # *args, **kwargs indica que se pueden aceptar más argumentos
    def post(self, request,  *args, **kwargs):

        # Devuelve la instancia del serializador que debe usarse para validar y
        # deserializar la entrada y serializar la salida
        serializer = self.get_serializer(data=request.data)
        # verifica si el serializer es valido de lo contrario devuelve una exception
        serializer.is_valid(raise_exception=True)
        # serializer.save()   guarda los datos del serializador en la DB y los trae a en una variable obtenido del serializador metodo create
        user = serializer.save()
        return Response({   # se responde con el usuario validado o con un ValidationError
            # se serializan los datos por medio de otro serializados en este caso UserSerializer
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # se crea el token para el usuario y se envia como respuesta.
            "token": AuthToken.objects.create(user)[1]
        })

# Login API
# generics.GenericAPIView permite crear una vista basa en clase con las caracteristicas de una API rest


class LoginAPI(generics.GenericAPIView):
    # serializer_class permite utilizar un modelo de serializacion diferente para esta clase en este caso RegisterSerializer
    serializer_class = LoginSerializer

    # este metodo se lanza cuando se realiza un post, este recibe
    # request que trae los datos del post
    # self que permite hacer referencia a esta clase
    # *args, **kwargs indica que se pueden aceptar más argumentos
    def post(self, request,  *args, **kwargs):
        # Devuelve la instancia del serializador que debe usarse para validar y
        # deserializar la entrada y serializar la salida
        serializer = self.get_serializer(data=request.data)
        # verifica si el serializer posee errores y si los posee genera una excepcion
        serializer.is_valid(raise_exception=True)
        # se verifica si el usuario es autenticado por medio del serializador en el metodo validate
        user = serializer.validated_data
        # se responde con el usuario validado o con un ValidationError
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# get User API
# RetrieveAPIView Se utiliza para puntos finales de solo lectura para representar una única instancia de modelo


class UserAPI(generics.RetrieveAPIView):
    # permisos otorgados a esta vista, aqui se encuentran los diferentes permisos.
    # https://www.django-rest-framework.org/api-guide/permissions/
    permissions_classes = [
        # solo se puede acceder a esta vista si el usuario esta autenticado
        permissions.IsAuthenticated
    ]
    # se hace uso del serializador UserSerializer
    serializer_class = UserSerializer

    # se retorna el usuario que esta autenticado

    def get_object(self):
        return self.request.user  # usuario autenticado
