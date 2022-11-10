from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import status
from .models import slot as Slots
import json

from accounts.api.serializers import*

from .serializers import *


from accounts.models import *




class AllBookingList(APIView):

    def get(self, request):
        booking=Application.objects.filter(status="PENDING")
        list=ViewBookingSerializer(booking,many =True)

        if list:
            return Response(list.data,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class approveRequest(APIView):

    def post(self,request,id):
        application = Application.objects.filter(id=id)
        application.update(status="APPROVED")
        return Response (200)

    

class Approved(APIView):
    def get(self,request):
        application = Application.objects.filter(status="APPROVED")
        list=ViewBookingSerializer(application,many =True)
        if list:
            return Response(list.data,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)



class declineRequest(APIView):
     def post(self,request,id):
        application = Application.objects.filter(id=id)
        application.update(status="DECLINED")
        return Response (200)



class SlotList(APIView):
    def get(self,request):
        available = Slots.objects.all()
        availableSLot = SlotSerializer(available,many = True)

        if availableSLot:
            return Response(availableSLot.data,status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)


class BookSlot(APIView):
    def post(self,request):
        body = request.body.decode('utf-8')
        body = json.loads(body)
        slotid=body['slotid']
        applicantid=body['applicantid']
        print(slotid)
        print(applicantid)
        slot=Slots.objects.get(id=slotid)
        user=Application.objects.get(id=applicantid)
        slot.reservedby=user
        slot.available=False
        slot.save()
        return Response(200)
        