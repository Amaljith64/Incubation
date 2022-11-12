from . models import slot as Slots
from rest_framework.serializers import ModelSerializer



class SlotSerializer(ModelSerializer):

    class Meta:
        model=Slots
        fields="__all__"

    