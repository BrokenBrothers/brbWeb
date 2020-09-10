from Apps.Portfolio.models import Contact
from rest_framework import viewsets, permissions
from .serializers import ContactSerializer

# Contact Viewsets (vista del api)


class ContactViweSet(viewsets.ModelViewSet):
    # queryset = Contact.objects.all()  # consulta a la base de datos "all"(todos los datos)
    permission_classes = [  # permisos atribuidos a la api
        # permissions.AllowAny # todos los permisos (CRUD)
        # todos los permisos (CRUD) si está autenticado
        permissions.IsAuthenticated
    ]

    def get_queryset(self):  # se sobre escribe el queryset

        # permite obtener los contactos creados por el usuario logueado
        return self.request.user.contact.all()

    # se expecifica la clase serializada por la cual se van a enviar los datos
    serializer_class = ContactSerializer

    # punto de creacion de una nueva, en este se le pasa el user al modelo contact
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
