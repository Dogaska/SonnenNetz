from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_delete
from django.dispatch import receiver
from django.utils.timezone import now
from django.utils.text import slugify

User = get_user_model()

class Offer(models.Model):

    class Meta:
        abstract = True

    class OfferCategory(models.TextChoices):
        SURFACE_OFFER = 'Surface Offer'
        PROJECT_OFFER = 'Project Offer'
        INVESTMENT_OFFER = 'Investment Offer'

    slug = models.SlugField(max_length=250, null=True, blank=True)
    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='%(class)s_owner')
    offer_name = models.CharField(max_length=255)
    offer_description = models.TextField()
    offer_excerpt = models.CharField(max_length=150, null=True, blank=True)
    offer_type = models.CharField(
        max_length=20, choices=OfferCategory.choices, blank=False, null=False)
    location = models.CharField(max_length=255)
    start_date = models.DateField(default=now)
    end_date = models.DateField(default=now)
    status = models.CharField(max_length=100)
    progress = models.DecimalField(max_digits=4, decimal_places=1)
    cover_image = models.ImageField(
        upload_to='offer_photos/', max_length=200, blank=True, null=True)
    images = models.ImageField(upload_to='%(class)s_uploads/', default='defaults/%(class)s_default.jpg')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    

    def save(self, *args, **kwargs) -> None:
        self.slug = slugify(self.offer_name)

        return super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.offer_name
    

@receiver(post_delete, sender=Offer)
def delete_cover_image(sender, instance, **kwargs):
    if instance.cover_image:
        instance.cover_image.delete(save=False)

class SurfaceOffer(Offer):
    class Meta:
        ordering = ('-start_date',)

    surface_type = models.CharField(max_length=100)
    surface_area = models.DecimalField(max_digits=9, decimal_places=2)
    file_upload = models.FileField(upload_to ='uploads/surface_offers', default= None) 

    def __str__(self) -> str:
        return f'{self.offer_name}-{self.created_by}'

class InvestmentOffer(Offer):

    class Meta:
        ordering = ('-start_date',)

    investment_amount = models.DecimalField(max_digits=12, decimal_places=2)
    file_upload = models.FileField(upload_to ='uploads/investment_offers', default= None) 

    def __str__(self) -> str:
        return f'{self.offer_name}-{self.created_by}'

class ProjectOffer(Offer):

    class Meta:
        ordering = ('-start_date',)

    investment_amount = models.DecimalField(max_digits=12, decimal_places=2)
    surface_area = models.DecimalField(max_digits=12, decimal_places=2)
    max_investment_limit = models.DecimalField(max_digits=12, decimal_places=2)
    file_upload = models.FileField(upload_to ='uploads/project_offers', default= None) 

    def __str__(self) -> str:
        return f'{self.offer_name}-{self.created_by}'