from django.db import models
from django.contrib.auth.models import User
import datetime 
# Create your models here.


'''
    Clase que permite definir la categoria de una publicacòn
    id: identificador en tabla autoincrementable
    categoryName: nombre de la categoria
'''
class Category(models.Model):
    id= models.AutoField(primary_key=True)
    categoryName = models.CharField(null=False, max_length=100)

'''
    clase que permite definir el autor de un post
    id: identificador en tabla autoincrementable
    email: correo electrònico del autor
    firtName: nombres del autor
    lastName: apellido del autor
    nickName: apodo del autor
    webSite: sitio web del autor
'''
class Author(models.Model):
    id=models.AutoField(primary_key=True)
    email = models.EmailField(null=False,max_length=254)
    firtsName = models.CharField(null = False, max_length=80)
    lastName = models.CharField(null = False, max_length=80)
    nickName = models.CharField(null=False, max_length=50)
    webSite = models.CharField(max_length=200)

'''
    clase que permite definir el numero de reacciones de un comentario o una publicaciòn
    id: identificador de tabla autoincrementable
    quantity: cantidad de reaciones.
'''
class Reaction(models.Model):
    id = models.AutoField(primary_key=True)
    quantity = models.PositiveIntegerField(null = False)

'''
    comentarios de una publicacion
    description: descripcion de un comentario
    like: cantidad de megustas que posee un comentario
    disLike: cantidad de no me gusta de un comentario
'''
class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    description = models.CharField(null=False, max_length=300)
    likeComment_id = models.ForeignKey(Reaction, related_name= ("LikeComment"),on_delete=models.PROTECT)
    disLikeComment_id = models.ForeignKey(Reaction, related_name= ("noLikeComment"),on_delete=models.PROTECT)

'''
    clase que permite tener un control sobre los post en el blog 
    id: identificador de tabla autoincrementable
    title: titulo de la publicaciòn
    body: contenido de la publicaciòn
    introduction: introducciòn de la publicaciòn
    image: imagen demostrativa de la publicaciòn
    creator_id: identificador del creador del la publicaciòn
    category_id: identificador de la categorìa a la que pertenece la publicacòn
    publishe_id : identificador del usuario que publica la publicaciòn.
    comment_id : comentarios relacionados a una publicaciòn
    like: cantidad de megustas que posee una publicaciòn
    disLike: cantidad de no me gusta de una publicaciòn
'''
class  Post(models.Model):
    id=models.AutoField(primary_key=True)
    title = models.CharField(null=False, max_length=200)
    body = models.CharField(null=False, max_length=5000)
    introduction = models.CharField(null=False, max_length=50)
    image = models.ImageField(upload_to='Blog')
    status = models.BooleanField(null = False, default=True)
    creator_id = models.ForeignKey( Author, on_delete=models.CASCADE)
    category_id = models.ForeignKey(Category, null = False,on_delete=models.CASCADE)
    publisher_id = models.ForeignKey(User, on_delete=models.PROTECT)
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)
    likePost_id = models.ForeignKey(Reaction,related_name= ("LikePost") ,on_delete=models.PROTECT)
    disLikePost_id =models.ForeignKey(Reaction,related_name=("noLikePost"), on_delete=models.PROTECT)
    