from django.shortcuts import render,redirect
from django.http import HttpResponse

def index(request):
    return render(request, 'main/index.html',{} )

def Login(request):
    return render(request, 'main/Login.html',{} )
    


def Sign_Up(request):
    return render(request, 'main/SignUp.html',{} )




