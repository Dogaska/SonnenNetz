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
        all_offers = list(surface_offers) + list(investment_offers) + list(project_offers)

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
            elif isinstance(item, ProjectOffer):
                serializer = ProjectOfferSerializer(item)
            serialized_results.append(serializer.data)

        return paginator.get_paginated_response(serialized_results)
    

class OfferDetailView(RetrieveAPIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request: Request, slug: str) -> Response:
        
         
        try:
            surface_offer = SurfaceOffer.objects.get(slug=slug)
            investment_offer = SurfaceOffer.objects.get(slug=slug)
            project_offers = SurfaceOffer.objects.get(slug=slug)

            if surface_offer is not None:
                surface_offer_serializer = SurfaceOfferSerializer(instance=surface_offer)
                return Response(data=surface_offer_serializer.data, status=status.HTTP_200_OK)
            
            if investment_offer is not None:
                investment_offer_serializer = InvestmentOfferSerializer(instance=investment_offer)
                return Response(data=investment_offer_serializer.data, status=status.HTTP_200_OK)
            
            if project_offers is not None:
                project_offer_serializer = ProjectOfferSerializer(instance=project_offers)
                return Response(data=project_offer_serializer.data, status=status.HTTP_200_OK)
            
            else:
                return Response({'message': 'Offer_type parameter is required.'}, status=status.HTTP_400_BAD_REQUEST)
            
        except (SurfaceOffer.DoesNotExist, InvestmentOffer.DoesNotExist, ProjectOffer.DoesNotExist):
                return Response({'message': 'Offer not found.'}, status=status.HTTP_404_NOT_FOUND)
