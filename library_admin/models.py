from django.db import models


class Book(models.Model):
    bookName = models.CharField(max_length=100)
    bookId = models.IntegerField()
    author = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=100)
    status = models.CharField(max_length=255, choices=[('available', 'Available'), ('not_available', 'Not Available')])
    isBorrowed = models.BooleanField(default=False)



    def _str_(self):
        return self.bookName

 # but in the name of the flowwing things is to go to the ls t
