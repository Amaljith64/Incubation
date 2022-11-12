from rest_framework.serializers import ModelSerializer
from accounts.models import Note,UserDetails
from django.contrib.auth.models import User
from accounts.models import *
from rest_framework import serializers
from rest_framework.response import Response



class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model=UserDetails
        fields="__all__"

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)



class NewApplication(ModelSerializer):
    
    # def validate_data(self, data):
    #     if Application.objects.filter(companyname=data['companyname'],alloted=False ).exists():
    #         raise serializers.ValidationError('You already have a pending request')
        
    class Meta:
        model=Application
        fields="__all__"

class ViewBookingSerializer(ModelSerializer):

    class Meta:
        model=Application
        fields="__all__"
    