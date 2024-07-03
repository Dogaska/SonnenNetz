from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags

import datetime


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is a required field.")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
        
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200, unique=True)
    birthday = models.DateField(default=datetime.date.today)
    username = models.CharField(max_length=255, unique=True)
    profession = models.CharField(max_length=50, blank=True, null=True)
    profile_picture = models.ImageField(
        upload_to='profile_pictures/', max_length=200, blank=True, null=True)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name", "last_name", "birthday"]

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.email}"
    

@receiver(reset_password_token_created) # if it receives smth, triggers the following code
def password_reset_token_created(reset_password_token, *args, **kwargs):
    sitelink = "http://localhost:5173/"
    token = "{}".format(reset_password_token.key)
    full_link = str(sitelink) + str("password-reset/") + str(token)

    context = {
        "full_link": full_link,
        "email_address": reset_password_token.user.email
    }

    html_messsage = render_to_string("backend/email.html", context=context)
    plain_message = strip_tags(html_messsage)

    msg = EmailMultiAlternatives(
        subject = "Request for resetting password for {title}".format(title=reset_password_token.user.email),
        body = plain_message,
        from_email = "sonnennetz@email.de",
        to = [reset_password_token.user.email]
    )

    msg.attach_alternative(html_messsage, "text/html")
    msg.send()