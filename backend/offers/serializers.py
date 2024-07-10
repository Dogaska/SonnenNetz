from rest_framework.serializers import CharField, ImageField, SlugField, RelatedField, ModelSerializer, Serializer
from .models import Offer, SurfaceOffer, InvestmentOffer, ProjectOffer

class OfferSerializer(Serializer):

    author_username = CharField(source='created_by.username', read_only=True)
    author_profile_image = ImageField(
        source='created_by.profile_image', read_only=True)

    class Meta:
        model = Offer
        fields = ['id', 'slug', 'offer_name', 'offer_excerpt', 'offer_description',
                  'offer_type', 'location', 'start_date', 'end_date', 'status', 'progress'
                  'cover_image', 'images', 'created_at', 'modified_at']

    def update(self, instance, validated_data):
        # Allowed update fields are: [title, subtitle, cover_image, content, category, status]

        for key, data in validated_data.items():
            if key == 'cover_image':
                instance.cover_image.delete(save=False)

            if key == 'file_upload':
                instance.file_upload.delete(save=False)
                
            setattr(instance, key, data)

        instance.save()

        return instance
    
class SurfaceOfferSerializer(ModelSerializer):
    author_username = CharField(source='created_by.username', read_only=True)
    author_profile_image = ImageField(
        source='created_by.profile_image', read_only=True)
    class Meta:
        model = SurfaceOffer
        fields = ['id', 'slug', 'offer_name', 'offer_excerpt', 'motivation', 'offer_description',
                  'offer_type', 'location', 'start_date', 'end_date', 'status', 'progress',
                  'cover_image', 'images', 'created_at', 'modified_at',
                  'surface_type','surface_area','file_upload', 
                  'investment_amount','max_investment_limit',
                  'created_by', 'author_username', 'author_profile_image']
        

class InvestmentOfferSerializer(ModelSerializer):
    author_username = CharField(source='created_by.username', read_only=True)
    author_profile_image = ImageField(
        source='created_by.profile_image', read_only=True)   
    class Meta:
        model = InvestmentOffer
        fields = ['id', 'slug', 'offer_name', 'offer_excerpt', 'motivation', 'offer_description',
                  'offer_type', 'location', 'start_date', 'end_date', 'status', 'progress',
                  'cover_image', 'images', 'created_at', 'modified_at',
                  'investment_amount','file_upload',
                  'created_by', 'author_username', 'author_profile_image']

class ProjectOfferSerializer(ModelSerializer):
    author_username = CharField(source='created_by.username', read_only=True)
    author_profile_image = ImageField(
        source='created_by.profile_image', read_only=True)
    class Meta:
        model = ProjectOffer
        fields = ['id', 'slug', 'offer_name', 'offer_excerpt', 'offer_description',
                  'offer_type', 'location', 'start_date', 'end_date', 'status', 'progress',
                  'cover_image', 'images', 'created_at', 'modified_at',
                  'investment_amount','surface_area','max_investment_limit','file_upload',
                  'created_by', 'author_username', 'author_profile_image']
