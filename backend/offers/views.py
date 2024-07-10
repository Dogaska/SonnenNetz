from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.generics import RetrieveAPIView
from rest_framework.request import Request
from rest_framework.response import Response

from .pagination import CustomPageNumberPagination
from .models import Offer, SurfaceOffer, InvestmentOffer ,ProjectOffer
from .serializers import OfferSerializer, SurfaceOfferSerializer, InvestmentOfferSerializer, ProjectOfferSerializer


class OfferListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # Collect all offers
        surface_offers = SurfaceOffer.objects.all()
        investment_offers = InvestmentOffer.objects.all()
        project_offers = ProjectOffer.objects.all()

        # Combine querysets into a list
        all_offers = list(surface_offers) + list(investment_offers) #+ list(project_offers)

        # Use the custom paginator to paginate the combined offers
        paginator = CustomPageNumberPagination()
        result_page = paginator.paginate_queryset(all_offers, request)
        if not result_page:
            return Response({"message": "No offers found"}, status=404)

        # Serialize page objects
        serialized_results = []
        for item in result_page:
            if isinstance(item, SurfaceOffer):
                serializer = SurfaceOfferSerializer(item)
            elif isinstance(item, InvestmentOffer):
                serializer = InvestmentOfferSerializer(item)
            #elif isinstance(item, ProjectOffer):
            #    serializer = ProjectOfferSerializer(item)
            serialized_results.append(serializer.data)

        return paginator.get_paginated_response(serialized_results)
    

class OfferDetailView(RetrieveAPIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, slug: str) -> Response:
        response_data = {}
        
        try:
            surface_offer = SurfaceOffer.objects.filter(slug=slug).first()
            investment_offer = InvestmentOffer.objects.filter(slug=slug).first()
            #project_offers = ProjectOffer.objects.filter(slug=slug).first()

            if surface_offer is not None:
                serializer = SurfaceOfferSerializer(surface_offer)
                response_data['surface_offer'] = serializer.data
            
            if investment_offer is not None:
                serializer = InvestmentOfferSerializer(investment_offer)
                response_data['investment_offer'] = serializer.data

            #if project_offers is not None:
            #    serializer = ProjectOfferSerializer(project_offers)
            #    response_data['project_offers'] = serializer.data

            if response_data:
                return Response(response_data, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Offer not found.'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
