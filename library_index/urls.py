from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name='index'),
    path('Login/', views.Login, name='Login'),
    path('SignUp/', views.Sign_Up, name='Sign_Up'),

]