from django.shortcuts import render

# Create your views here.

def homeForfolio(request):
    return render(request,'homeForfolio.html')