from rest_framework import serializers
from .models import SurfaceOffer, InvestmentOffer, ProjectOffer

class SurfaceOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurfaceOffer
        fields = "__all__"
