from rest_framework.serializers import CharField, ImageField, SlugField, RelatedField, ModelSerializer, HyperlinkedRelatedField

from .models import Blog, Comment

class BlogSerializer(ModelSerializer):

    author_username = CharField(source='author.username', read_only=True)
    #author_profile_image = ImageField(
    #    source='author.profile_image', read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'title', 'slug', 'excerpt', 'cover_image', 'content', 'category', 'created_at', 'modified_at',
                  'level', 'author', 'author_username', 'file_upload']

    def update(self, instance, validated_data):
        # Allowed update fields are: [title, subtitle, cover_image, content, category, status]

        for key, data in validated_data.items():
            if key == 'cover_image':
                instance.cover_image.delete(save=False)

            if key == 'file_upload':
                instance.file_upload.delete(save=False)
                
            setattr(instance, key, data)

        instance.save()

        return instance
    
class CommentSerializer(ModelSerializer):

    blog_slug = SlugField(source='blog.slug', read_only=True)

    user_username = CharField(source='user.username', read_only=True)
    user_first_name = CharField(source='user.first_name', read_only=True)
    user_last_name = CharField(source='user.last_name', read_only=True)
    user_profile_picture = ImageField(
        source='user.profile_picture', read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_at', 'blog', 'blog_slug', 
                  'user', 'user_username', 'user_first_name', 'user_last_name', 'user_profile_picture']