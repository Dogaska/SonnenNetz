import django_filters
from django.db.models import Q
from .models import SurfaceOffer, InvestmentOffer

class CombinedOfferFilter(django_filters.FilterSet):
    search = django_filters.CharFilter(method='filter_search')
    offer_name = django_filters.CharFilter(lookup_expr='icontains')
    created_by = django_filters.CharFilter(lookup_expr='icontains')
    offer_description = django_filters.CharFilter(lookup_expr='icontains')
    offer_type = django_filters.ChoiceFilter(choices=SurfaceOffer.OfferCategory.choices)
    location = django_filters.CharFilter(lookup_expr='icontains')
    status = django_filters.ChoiceFilter(choices=SurfaceOffer.OfferStatus.choices)
    
    class Meta:
        model = SurfaceOffer  # Or any base model
        fields = ['offer_name', 'created_by', 'offer_description', 'offer_type', 'location', 'status']

    def filter_search(self, queryset, name, value):
        return queryset.filter(
            Q(offer_name__icontains=value) |
            Q(created_by__username__icontains=value) |
            Q(offer_description__icontains=value) |
            Q(offer_type__icontains=value) |
            Q(location__icontains=value)
        )