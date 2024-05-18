from django.urls import path
from . import views

urlpatterns = [
    path('', views.User, name='User'),
    path('Available_Books/', views.Available_books, name='Available_books'),  # Added a trailing slash
    path('Borrow_Book/', views.Borrow_book, name='Borrow_book'),  # Added a trailing slash
    path('Borrowed_Books/', views.Borrowed_books, name='Borrowed_books'),  # Added a trailing slash
    path('Search_Books/', views.Search_books, name='Search_books'),  # Added a trailing slash
]
