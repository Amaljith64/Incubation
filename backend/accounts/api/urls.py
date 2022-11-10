from django.urls import path
from . import views
from . views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)


urlpatterns = [
    path('',views.getRoutes),
    path('notes/',views.getNotes),

    path('signup/',views.Usersignup.as_view(),name="signup"),
    path('userapplication/',views.Applications.as_view(),name="Applications"),
    path('viewapplication/<int:id>/',views.ViewApplication.as_view(),name="ViewApplication"),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]