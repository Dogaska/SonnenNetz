from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import RegisterViewset, LoginViewset, UserViewset


router = DefaultRouter()
router.register("signup", RegisterViewset, basename='signup')
router.register("login", LoginViewset, basename='login')
urlpatterns = router.urls