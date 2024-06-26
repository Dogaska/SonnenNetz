from django.shortcuts import render
from rest_framework import viewsets, permissions
from django.contrib.auth import get_user_model, authenticate
from rest_framework.response import Response
from knox.models import AuthToken

from .serializers import RegisterSerializer, LoginSerializer
from .models import CustomUser


User = get_user_model()

class RegisterViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print(serializer.error_messages)
            return Response(serializer.errors, status=400) # we know it is a bad request
        
class LoginViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializor_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]

            user = authenticate(request, email=email, password=password)

            if user:
                _, token = AuthToken.objects.create(user)
                return Response(
                    {
                        "user": self.serializor_class(user).data,
                        "token": token,
                    }
                )
            else:
                return Response({"error": "Invalid credentials"}, status=401) # unauthenticated 
        else:
            return Response(serializer.errors, status=400)
