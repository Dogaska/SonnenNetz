from django.shortcuts import render
from rest_framework import viewsets
from .models import SurfaceOffer
from .serializers import SurfaceOfferSerializer

class SurfaceOfferViewSet(viewsets.ModelViewSet):
    queryset = SurfaceOffer.objects.all()
    serializer_class = SurfaceOfferSerializer
