from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Blog, Comment

admin.site.register(Blog)
admin.site.register(Comment)
