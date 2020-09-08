from rest_framework import routers
from .api import ContactViweSet
from django.urls import path

''' 
     se maqueta todo el recorriedo de las urls
'''
router = routers.DefaultRouter() # enrutador de todas las urls de la app Forfolio
router.register('api/Contact',ContactViweSet,'Contacts' ) # agregando una ruta al enrutador (ruta, vista con datos serializados,nombre )


urlpatterns = router.urls # se agrega las urls registradas a la aplicación Blog
   
