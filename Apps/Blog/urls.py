from django.urls import path
from Apps.Blog.views import homeBlog # importacion de las vistas de la Blog

''' 
    urls de la aplicacion Blog, se maqueta todo el recorriedo de las urls
'''
urlpatterns =[
    path('',homeBlog,name='homeBlog')
]