import uuid

from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver
from django.utils import timezone
from django.utils.text import slugify


def upload_to_path(instance: 'Blog', filename: str) -> str:
    user_id: str = instance.author.id
    blog_id: str = instance.id
    return f'{settings.MEDIA_ROOT}/blog_photos/{filename}'


class Blog(models.Model):

    class Meta:
        ordering = ('-created_at',)

    class ContentLevel(models.TextChoices):
        EASY = 'easy'
        MEDIUM = 'medium'
        HARD = 'hard'
        ADVANCE = 'advance'


    class Category(models.TextChoices):
        GUIDE = 'guide'
        POLITICAL = 'political & legal'
        ENVIRONMENT = 'environment'
        TECHNICAL = 'technical'
        FINANCIAL = 'financial'
        COMMUNITY = 'community'

    id = models.CharField(primary_key=True, max_length=36, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=225, unique=True)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    excerpt = models.CharField(max_length=300, null=True, blank=True)
    cover_image = models.ImageField(
        upload_to='blog_photos/', max_length=200, blank=True, null=True)
    content = models.TextField()
    category = models.CharField(
        max_length=20, choices=Category.choices, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    level = models.CharField(
        max_length=10, choices=ContentLevel.choices, blank=False, null=False, default= None)
    #applaud_count = models.PositiveIntegerField(default=0)
    author = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='blog_posts') #created by
    file_upload = models.FileField(upload_to ='uploads/', default= None) 

    def save(self, *args, **kwargs) -> None:
        self.slug = slugify(self.title)

        return super().save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title


@receiver(post_delete, sender=Blog)
def delete_cover_image(sender, instance, **kwargs):
    if instance.cover_image:
        instance.cover_image.delete(save=False)


class Comment(models.Model):

    class Meta:
        ordering = ('-created_at',)

    id = models.CharField(primary_key=True, max_length=36,
                          default=uuid.uuid4, editable=False)
    content = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    blog = models.ForeignKey(
        Blog, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='comments')

    def __str__(self) -> str:
        return f'{self.blog}-{self.user}'