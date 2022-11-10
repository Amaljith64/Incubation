from rest_framework.serializers import ModelSerializer
from accounts.models import Note,UserDetails
from django.contrib.auth.models import User
from accounts.models import *
from rest_framework import serializers



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
    class Meta:
        model=Application
        fields="__all__"
    
    pending=serializers.BooleanField(default=True)

class ViewBookingSerializer(ModelSerializer):

    class Meta:
        model=Application
        fields="__all__"
    