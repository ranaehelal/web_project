from django.http import HttpResponse
from django.shortcuts import render

from .models import Book





# Create your views here.

def admin_HomePage(request):
    return render(request, 'Admin/admin.html' , {} )
# return HttpResponse(" Admin Home Page")


def AddBook(request):
    return render(request, 'Admin/Add_Book.html',{} )
# return HttpResponse(" Admin / Add Book")


def DeleteBook(request):
    return render(request, 'Admin/delete_book.html',{} )
# return HttpResponse(" Admin / Delete Book")


def EditBook(request):
    return render(request, 'Admin/edit_book.html',{} )
# return HttpResponse(" Admin / Edit Book")




def ViewBook_List(request):
    # Query all Book objects from the database
    books = Book.objects.all()

    # Pass the queryset to the template context
    return render(request, 'Admin/availableBooks.html', {'books': books})


# def ViewBook_List(request):
#     return render(request, 'Admin/availableBooks.html',{} )
# return HttpResponse(" Admin / View Book List")




