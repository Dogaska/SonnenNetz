from rest_framework.serializers import CharField, FileField, ImageField, ModelSerializer, Serializer
from .models import Offer, SurfaceOffer, InvestmentOffer, ProjectOffer, OfferFile, OfferImage


class OfferImageSerializer(ModelSerializer):
    class Meta:
        model = OfferImage
        fields = ['id', 'image']

class OfferFileSerializer(ModelSerializer):
    class Meta:
        model = OfferFile
        fields = ['id', 'file']

class OfferSerializer(ModelSerializer):
    offer_owner_first_name = CharField(source='created_by.first_name', read_only=True)
    offer_owner_last_name = CharField(source='created_by.last_name', read_only=True)

    class Meta:
        model = Offer
        fields = ['id', 'slug', 'offer_name', 'offer_excerpt', 'offer_description',
                  'offer_type', 'location', 'start_date', 'end_date', 'status', 'progress',
                  'cover_image', 'images', 'files', 'created_at', 'modified_at', 
                  'offer_owner_first_name', 'offer_owner_last_name']

    
class SurfaceOfferSerializer(ModelSerializer):
    images = OfferImageSerializer(many=True, read_only=True)
    files = OfferFileSerializer(many=True, read_only=True)
    offer_owner_first_name = CharField(source='created_by.first_name', read_only=True)
    offer_owner_last_name = CharField(source='created_by.last_name', read_only=True)

    class Meta:
        model = SurfaceOffer
        fields = ['id', 'slug', 'offer_name', 'offer_excerpt', 'motivation', 'offer_description',
                  'offer_type', 'location', 'start_date', 'end_date', 'status', 'progress',
                  'cover_image', 'images', 'files', 'created_at', 'modified_at',
                  'surface_type','surface_area', 
                  'investment_amount','max_investment_limit',
                  'created_by', 'offer_owner_first_name', 'offer_owner_last_name']

    def create(self, validated_data):
        images_data = self.context['request'].FILES.getlist('images')
        files_data = self.context['request'].FILES.getlist('files')
        cover_image_data = self.context['request'].FILES.get('cover_image')
        
        validated_data['cover_image'] = cover_image_data
        
        offer = SurfaceOffer.objects.create(**validated_data)

        for image_data in images_data:
            OfferImage.objects.create(surface_offer=offer, image=image_data)

        for file_data in files_data:
            OfferFile.objects.create(surface_offer=offer, file=file_data)

        return offer
        

class InvestmentOfferSerializer(ModelSerializer):
    images = OfferImageSerializer(many=True, read_only=True)
    files = OfferFileSerializer(many=True, read_only=True)
    offer_owner_first_name = CharField(source='created_by.first_name', read_only=True)
    offer_owner_last_name = CharField(source='created_by.last_name', read_only=True)

    class Meta:
        model = InvestmentOffer
        fields = ['id', 'slug', 'offer_name', 'offer_excerpt', 'motivation', 'offer_description',
                  'offer_type', 'location', 'start_date', 'end_date', 'status', 'progress',
                  'cover_image', 'images', 'files', 'created_at', 'modified_at',
                  'investment_amount', 'created_by', 'offer_owner_first_name', 'offer_owner_last_name']

    def create(self, validated_data):
        images_data = self.context['request'].FILES.getlist('images')
        files_data = self.context['request'].FILES.getlist('files')
        cover_image_data = self.context['request'].FILES.get('cover_image')
        
        validated_data['cover_image'] = cover_image_data
        
        offer = InvestmentOffer.objects.create(**validated_data)

        for image_data in images_data:
            OfferImage.objects.create(investment_offer=offer, image=image_data)

        for file_data in files_data:
            OfferFile.objects.create(investment_offer=offer, file=file_data)

        return offer

class ProjectOfferSerializer(ModelSerializer):
    images = OfferImageSerializer(many=True, read_only=True)
    files = OfferFileSerializer(many=True, read_only=True)
    offer_owner_first_name = CharField(source='created_by.first_name', read_only=True)
    offer_owner_last_name = CharField(source='created_by.last_name', read_only=True)
    class Meta:
        model = ProjectOffer
        fields = ['id', 'slug', 'offer_name', 'offer_excerpt', 'offer_description',
                  'offer_type', 'location', 'start_date', 'end_date', 'status', 'progress',
                  'cover_image', 'images', 'created_at', 'modified_at',
                  'investment_amount','surface_area','max_investment_limit','files',
                  'created_by',  'offer_owner_first_name', 'offer_owner_last_name']