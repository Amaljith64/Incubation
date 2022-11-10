from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserDetails(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
  

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    body = models.TextField()


class Application(models.Model):
    STATUS=(
        ('PENDING','PENDING'),
        ('DECLINED','DECLINED'),
        ('APPROVED','APPROVED'),
    )
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    companyname=models.CharField(max_length=20)
    email=models.EmailField(max_length=100)
    phone = models.CharField(max_length=50,null = True, blank=True)
    address = models.CharField( max_length=50,null = True)
    img = models.ImageField(upload_to='image',null=True)
    status = models.CharField(max_length=100,null=True,choices=STATUS,default='PENDING')
    alloted = models.BooleanField(default=False)
    pending=models.BooleanField(default=True)


