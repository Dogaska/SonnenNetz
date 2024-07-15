from django.db import models
from unittest.util import _MAX_LENGTH
from django.db import models
from django_resized import ResizedImageField
from django.contrib.auth import get_user_model

class Contact(models.Model):
    user= models.ForeignKey(get_user_model(), related_name='friends', on_delete=models.CASCADE)
    friends= models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.user.username

class Message(models.Model):
    contact= models.ForeignKey(Contact, related_name='messages', on_delete=models.CASCADE)
    message= models.TextField(blank=True)
    timestamp= models.DateTimeField(auto_now_add=True)
    image = ResizedImageField(force_format='WEBP', size=None,scale=0.5, quality=75, upload_to='images', blank=True, null=True)

    def __str__(self) -> str:
        return self.contact.user.username
    
class Chat(models.Model):
    participants= models.ManyToManyField(Contact, related_name='chats')
    messages= models.ManyToManyField(Message, blank=True) 
    viewer = models.ForeignKey(get_user_model(), related_name="viewer", on_delete=models.CASCADE)
    
    def __str__(self):
        return "{}".format(self.pk)