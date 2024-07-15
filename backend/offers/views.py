from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.generics import RetrieveAPIView, CreateAPIView, ListAPIView
from rest_framework.response import Response

from .pagination import CustomPageNumberPagination
from .models import Offer, SurfaceOffer, InvestmentOffer ,ProjectOffer, OfferImage, OfferFile
from .serializers import OfferSerializer, SurfaceOfferSerializer, InvestmentOfferSerializer, ProjectOfferSerializer


class OfferListView(APIView):
    """ 
    List all offers, or creates a new offer.
    """
    permission_classes = [AllowAny]

    def get(self, request):
        # Collect all offers
        surface_offers = SurfaceOffer.objects.all()
        investment_offers = InvestmentOffer.objects.all()
        #project_offers = ProjectOffer.objects.all()

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
        surface_offer_queryset = SurfaceOffer.objects.all()
        investment_offer_queryset = InvestmentOffer.objects.all()

        all_offers = list(surface_offer_queryset) + list(investment_offer_queryset)

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
            serialized_results.append(serializer.data)

        return paginator.get_paginated_response(serialized_results)


    def create(self, request):
        print(request.data)
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