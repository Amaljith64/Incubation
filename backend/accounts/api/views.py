from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
import json
from django.contrib.auth.models import User
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import *
from accounts.models import Note,Application



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['is_superuser'] = user.is_superuser
        token['user_id'] = user.id

        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['GET'])
def getRoutes(request):

    routes = [
        '/api/token',
        '/api/token/refresh',
    ]


    return Response(routes)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    user = request.user
    notes = user.note_set.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


class Usersignup(APIView):
    def post(self,request):

        body = request.body.decode('utf-8')
        body = json.loads(body)
        username = body['username']
        email = body['email']
        password=body['password']
        user=User.objects.create(username=username, email=email
        )
        user.set_password(password)
        user.save()
        return Response(200)


class Applications(APIView):
    def post(self,request):
        
        
        reservation=NewApplication(data=request.data)
       
        print(reservation)
      
        if reservation.is_valid():
            reservation.save()
            print('valid dataaaaaaaaaa')
            return Response(status=200)
        else:
            print('not founfdddd')
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        

class ViewApplication(APIView):
    def get(self,request,id):
        
        toshow=Application.objects.filter(user=id)
        list = ViewBookingSerializer(toshow,many=True)

        if list:
            return Response(list.data,status=200)
        else:
            return Response(status=404)  