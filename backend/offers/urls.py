from django.urls import include, path
from rest_framework.routers import DefaultRouter

from django.urls import path

from .views import OfferMultiModelViewSet


router = DefaultRouter()
router.register("", OfferMultiModelViewSet, basename="offers")

urlpatterns = [
    path('', include(router.urls)),
]