from django.urls import path
from . import views

from rest_framework_simplejwt import views as jwt_views




urlpatterns = [


    path('',views.AllBookingList.as_view(),name="allrequests"),
    path('approveRequest/<str:id>',views.approveRequest.as_view(),name="approveRequest"),
    path('approved',views.Approved.as_view(),name="approved"),
    path('declineRequest/<str:id>',views.declineRequest.as_view(),name="declineRequest"),


    path('slotbooking',views.SlotList.as_view(),name="slotbooking"),
    path('bookslot',views.BookSlot.as_view(),name="bookslot"),


]