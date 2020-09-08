from Apps.Blog.models import Category,Author,Reaction,Comment,Post
from rest_framework import viewsets, permissions
from .serializers import AuthorSerializer, CategorySerializer, CommentSerializer, ReactionSerializer, PostSerializer

# Category Viewsets (vista del api)
class CategoryViweSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()  # consulta a la base de datos "all"(todos los datos)
    permissions_classes = [ # permisos atribuidos a la api
        permissions.AllowAny # todos los permisos
    ]
    serializer_class = CategorySerializer  # se expecifica la clase serializada

# Author Viewsets (vista del api)
class AuthorViweSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()  # consulta a la base de datos "all"(todos los datos)
    permissions_classes = [ # permisos atribuidos a la api
        permissions.AllowAny # todos los permisos (CRUD)
    ]
    serializer_class = AuthorSerializer  # se expecifica la clase serializada