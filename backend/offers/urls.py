from django.urls import include, path
from rest_framework.routers import DefaultRouter

from django.urls import path

from .views import OfferListView, OfferDetailView, OfferMultiModelViewSet


router = DefaultRouter()
router.register("", OfferMultiModelViewSet, basename="offers")

urlpatterns = [
    # Offer urls
    path('all/', OfferListView.as_view()),
    path('<slug>/', OfferDetailView.as_view()),
    path('', include(router.urls)),
]