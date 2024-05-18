from django.shortcuts import render
from django.http import HttpResponse
from library_admin.models import Book


# Create your views here.


def User(request):
    return render(request, 'User/User.html',{} )
    


def Available_books(request):
    available_books = Book.objects.filter(status='available')
    return render(request, 'User/Available_books.html',{'books':Book.objects.all()} )
    



def Borrow_book(request):
    return render(request, 'User/Borrow_book.html',{'books':Book.objects.all()}  )
    



def Borrowed_books(request):
    # Retrieve borrowed books from the database
    borrowed_books = Book.objects.all()

    return render(request, 'User/Borrowed_books.html',{'borrowed_books': borrowed_books} )


def Search_books(request):
    return render(request, 'User/Search_books.html',{} )
