from django.db import models
from accounts.models import *
# Create your models here.





class slot(models.Model):
    reservedby = models.ForeignKey(Application,on_delete=models.SET_NULL,null=True,blank=True)
    available = models.BooleanField(default=True, null=True, blank=True)
    