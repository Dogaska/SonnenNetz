from django.db import models
from django.contrib.auth import get_user_model
from django.utils.timezone import now

User = get_user_model()

class Offers(models.Model):
    offer_type = models.CharField(max_length=100)
    offer_location = models.CharField(max_length=255)
    #created_at = models.DateTimeField(auto_now_add=True, auto_now=True)

class OfferBase(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    offer = models.ForeignKey(Offers, on_delete=models.CASCADE, related_name='%(class)s_offers')
    offer_name = models.CharField(max_length=255)
    offer_description = models.TextField()
    community_type = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    start_date = models.DateField(default=now)
    end_date = models.DateField(default=now)
    status = models.CharField(max_length=100)
    #files = models.ManyToManyField('Attachment', related_name='%(class)s_files')
    images = models.ImageField(upload_to='%(class)s_uploads/', default='defaults/%(class)s_default.jpg')

    def set_creator(self, user):
        if user.is_authenticated:
            self.created_by = user
            self.save()

    class Meta:
        abstract = True

class SurfaceOffer(OfferBase):
    surface_type = models.CharField(max_length=100)
    surface_area = models.DecimalField(max_digits=9, decimal_places=2)

class InvestmentOffer(OfferBase):
    investment_amount = models.DecimalField(max_digits=12, decimal_places=2)

class ProjectOffer(OfferBase):
    budget_goal = models.DecimalField(max_digits=12, decimal_places=2)
    surface_area_goal = models.DecimalField(max_digits=12, decimal_places=2)
    max_investment_limit = models.DecimalField(max_digits=12, decimal_places=2)
