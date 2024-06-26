# Why do we need a serializer
# Serializers are bridge between the frontend and backend
# The data react sends to backend is in JSON format.
# Our database management system can not JSON that format.
# Serializer makes sure the data will be converted in a readable format for database system.

from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import get_user_model

User = get_user_model() # even the user model is changed, always gets the active user model

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password',  'birthday'] # related fields that I get from frontend
        extra_kwargs = {'password' : {'write_only':True}} # do not sent the password with response

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop("password", None)
        return ret