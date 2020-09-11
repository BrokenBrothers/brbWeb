from django.urls import path, include
# importacion de las vistas basadas en clase de esta app
from .api import RegisterAPI, LoginAPI, UserAPI
# es el administrador de vistas, aunque este proporcio algunas vistas por default solo se utiliza una "Logout"
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    # llamado a la vista de registro cuando se envíe una petición a esa url
    path('api/auth/register', RegisterAPI.as_view()),
    # llamado a la vista de login el cual por medio de las credenciales pide el token
    path('api/auth/login', LoginAPI.as_view()),
    # llamado a la vista del usuario(datos de usuario) (este se llama por medio del token)
    path('api/auth/user', UserAPI.as_view()),
    # llamado a la vista de logout, este elimina el token de memoria
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='kanox_logout'),
]
