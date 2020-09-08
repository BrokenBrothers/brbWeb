from Apps.Portfolio.models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer

# Contact Viewsets (vista del api)
class ContactViweSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()  # consulta a la base de datos "all"(todos los datos)
    permissions_classes = [ # permisos atribuidos a la api
        permissions.AllowAny # todos los permisos (CRUD)
    ]
    serializer_class = ContactSerializer  # se expecifica la clase serializada por la cual se van a enviar los datos