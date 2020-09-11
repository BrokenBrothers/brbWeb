from Apps.Portfolio.models import Contact
# viewsets vista basada en clases
# permissions permite verificar los permisos que va a tener la clase (vea el siguiente link si desea saber que tipo de permisos hay)
# https://www.django-rest-framework.org/api-guide/permissions/
from rest_framework import viewsets, permissions
# ContactSerializer es el modelo serializado
from .serializers import ContactSerializer


# Contact Viewsets (vista del api), servicio que brinda este backend


class ContactViweSet(viewsets.ModelViewSet):
    # queryset = Contact.objects.all()  # consulta a la base de datos "all"(todos los datos)
    permission_classes = [  # permisos atribuidos a la api
        # permissions.AllowAny # todos los permisos (CRUD)
        # todos los permisos (CRUD) si está autenticado
        # el usuario debe de estar autenticado para poder hacer uso de esta clase
        permissions.IsAuthenticated
    ]
    # se expecifica la clase serializada por la cual se van a enviar los datos
    serializer_class = ContactSerializer

    def get_queryset(self):  # se sobre escribe el queryset

        # permite obtener los contactos creados por el usuario logueado
        return self.request.user.contact.all()

    # punto de creacion de una nueva, en este se le pasa el user al modelo contact

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
