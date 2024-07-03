from rest_framework.serializers import CharField, ImageField, SlugField, RelatedField, ModelSerializer, Serializer
from .models import Offer, SurfaceOffer, InvestmentOffer, ProjectOffer

class OfferSerializer(Serializer):

    author_username = CharField(source='author.username', read_only=True)
    #author_profile_image = ImageField(
    #    source='author.profile_image', read_only=True)

    class Meta:
        model = Offer
        fields = "__all__"

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
    class Meta:
        model = SurfaceOffer
        fields = "__all__"

class InvestmentOfferSerializer(ModelSerializer):
    class Meta:
        model = InvestmentOffer
        fields = "__all__"

class ProjectOfferSerializer(ModelSerializer):
    class Meta:
        model = ProjectOffer
        fields = "__all__"
