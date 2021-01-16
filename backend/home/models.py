from django.db import models

# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=50)
    brand = models.CharField(max_length=30)
    color = models.CharField(max_length=20)

    def __str__(self):
        return self.name