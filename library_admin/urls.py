from django.urls import path
from . import views


urlpatterns = [
    path('', views.admin_HomePage, name='admin_HomePage'),
    path('AddBook', views.AddBook, name='AddBook'),
    path('DeleteBook', views.DeleteBook, name='DeleteBook'),
    path('EditBook', views.EditBook, name='EditBook'),
    path('ViewBook_List', views.ViewBook_List, name='ViewBook_List'),


]