from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from rest_framework.viewsets import ViewSet
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.response import Response

from .pagination import CustomPageNumberPagination
from .models import SurfaceOffer, InvestmentOffer ,ProjectOffer, Offer,  OfferImage, OfferFile
from .serializers import SurfaceOfferSerializer, InvestmentOfferSerializer, ProjectOfferSerializer
from .filters import CombinedOfferFilter

# Constants
NUM_OFFER_PER_PAGE = 10


class OfferMultiModelViewSet(ViewSet):
    permission_classes=[AllowAny]
    parser_classes = [MultiPartParser, FormParser]
    lookup_field = 'slug'
    
    #def get_permissions(self):
    #    if self.action == 'list':
    #        permission_classes = [AllowAny]
    #    else:
    #        permission_classes = [IsAuthenticated]
    #    return [permission() for permission in permission_classes]


    def list(self, request):

        filterset_surface_offer = CombinedOfferFilter(request.GET, queryset=SurfaceOffer.objects.all().order_by('-created_at'))
        filterset_investment_offer = CombinedOfferFilter(request.GET, queryset=InvestmentOffer.objects.all().order_by('-created_at'))
        filterset = list(filterset_surface_offer.qs) + list(filterset_investment_offer.qs)
        sorted_filterset = sorted(filterset, key=lambda x: x.created_at, reverse=True)
        total = len(filterset)

        paginator = CustomPageNumberPagination()
        result_page = paginator.paginate_queryset(sorted_filterset, request)
        if not result_page:
            return Response({"message": "No offers found"}, status=404)

        serialized_results = []
        for item in result_page:
            if isinstance(item, SurfaceOffer):
                serializer = SurfaceOfferSerializer(item)
            elif isinstance(item, InvestmentOffer):
                serializer = InvestmentOfferSerializer(item)
            serialized_results.append(serializer.data)

        return paginator.generate_response(serialized_results, total=total)

    #def list(self, request):
    #    surface_offer_queryset = SurfaceOffer.objects.all()
    #    investment_offer_queryset = InvestmentOffer.objects.all()
#
    #    all_offers = list(surface_offer_queryset) + list(investment_offer_queryset)
#
    #    # Use the custom paginator to paginate the combined offers
    #    paginator = CustomPageNumberPagination()
    #    result_page = paginator.paginate_queryset(all_offers, request)
    #    if not result_page:
    #        return Response({"message": "No offers found"}, status=404)
#
    #    # Serialize page objects
    #    serialized_results = []
    #    for item in result_page:
    #        if isinstance(item, SurfaceOffer):
    #            serializer = SurfaceOfferSerializer(item)
    #        elif isinstance(item, InvestmentOffer):
    #            serializer = InvestmentOfferSerializer(item)
    #        serialized_results.append(serializer.data)
#
    #    return paginator.get_paginated_response(serialized_results)


    def create(self, request):
        request.data["created_by"] = request.user.id
        offer_type = request.data.get('offer_type')
        if offer_type == 'Surface Offer':
            serializer = SurfaceOfferSerializer(data=request.data, context={'request': request})
        elif offer_type == 'Investment Offer':
            serializer = InvestmentOfferSerializer(data=request.data, context={'request': request})
        elif offer_type == 'Project Offer':
            serializer = ProjectOfferSerializer(data=request.data, context={'request': request})
        else:
            return Response({'error': 'Invalid offer type'}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            serializer.save()  # `created_by` is set in the serializer
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, slug=None):
        offer_type = request.query_params.get('offer_type')
        if offer_type == 'Surface Offer':
            queryset = SurfaceOffer.objects.all()
            model = get_object_or_404(queryset, slug=slug)
            serializer = SurfaceOfferSerializer(model)
        elif offer_type == 'Investment Offer':
            queryset = InvestmentOffer.objects.all()
            model = get_object_or_404(queryset, slug=slug)
            serializer = InvestmentOfferSerializer(model)
        elif offer_type == 'Project Offer':
            queryset = ProjectOffer.objects.all()
            model = get_object_or_404(queryset, slug=slug)
            serializer = ProjectOfferSerializer(model)
        else:
            return Response({'error': 'Invalid offer type'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.data)

    def update(self, request, slug=None):
        offer_type = request.query_params.get('offer_type')
        print(request.data['offer_type'])
        if offer_type == 'Surface Offer':
            queryset = SurfaceOffer.objects.all()
            model = get_object_or_404(queryset, slug=slug)
            serializer = SurfaceOfferSerializer(model)
        elif offer_type == 'Investment Offer':
            queryset = InvestmentOffer.objects.all()
            model = get_object_or_404(queryset, slug=slug)
            serializer = InvestmentOfferSerializer(model)
        else:
            return Response({'error': 'Invalid offer type'}, status=status.HTTP_400_BAD_REQUEST)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, slug=None):
        offer_type = request.query_params.get('offer_type')
        print(request.data['offer_type'])
        if offer_type == 'Surface Offer':
            queryset = SurfaceOffer.objects.all()
            model = get_object_or_404(queryset, slug=slug)
        elif offer_type == 'Investment Offer':
            queryset = InvestmentOffer.objects.all()
            model = get_object_or_404(queryset, slug=slug)
        else:
            return Response({'error': 'Invalid offer type'}, status=status.HTTP_400_BAD_REQUEST)
        
        model.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)