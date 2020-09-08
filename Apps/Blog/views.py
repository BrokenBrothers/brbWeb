from django.shortcuts import render

# Create your views here.
def homeBlog(request):
    return render(request,'homeBlog.html')