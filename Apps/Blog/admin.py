from django.contrib import admin
from Apps.Blog.models import Category,Author,Reaction,Comment,Post

# Register your models here.

admin.site.register(Category)
admin.site.register(Author)
admin.site.register(Reaction)
admin.site.register(Comment)
admin.site.register(Post)
