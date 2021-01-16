from rest_framework import viewsets, permissions
from .serializers import PersonSerializer
from home.models import Person

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PersonSerializer