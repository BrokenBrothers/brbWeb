from django.db import models
import datetime
from django.contrib.auth.models import User

# Create your models here.

'''
    Clase que permite generar migraciones a la tabla contacto
    email: correo electronico del contacto
    message: contenido de la correo electrònico 
    subject: asunto del correo electrònico
    owner: Usuario que crea el contacto
    date: fecha del correo electrònico
'''


class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(null=False, max_length=254)
    message = models.CharField(null=False, max_length=600)
    subject = models.CharField(null=False, max_length=100)
    owner = models.ForeignKey(
        User, related_name="contact", on_delete=models.CASCADE, null=True)
    date = models.DateTimeField(null=False, default=datetime.datetime.now())

    def __str__(self):
        return '{}'.format(self.email)
