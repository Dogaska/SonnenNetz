from django.shortcuts import get_object_or_404
from rest_framework import status, viewsets
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView, CreateAPIView
import uuid

from .filters import BlogFilter
from .models import Blog, Comment
from .pagination import CustomPageNumberPagination
from .serializers import BlogSerializer, CommentSerializer
from django_filters.rest_framework import DjangoFilterBackend


# ------------------------------ Blog views ------------------------------ #
class AllBlogsListView(APIView):
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = BlogFilter
    
    def get(self, request):
        queryset = Blog.objects.all()
        filtered_queryset = self.filterset_class(request.GET, queryset=queryset).qs
        total = filtered_queryset.count()
        paginator = CustomPageNumberPagination()
        return paginator.generate_response(filtered_queryset, BlogSerializer, request, total)

class BlogDetailView(RetrieveAPIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request: Request, slug: str) -> Response:
        try:
            blog = Blog.objects.get(slug=slug)
            blog_serializer = BlogSerializer(instance=blog)
            return Response(data=blog_serializer.data, status=status.HTTP_200_OK)
        except Blog.DoesNotExist:
            return Response(data={'message': 'Blog does not exist'}, status=status.HTTP_404_NOT_FOUND)


# ------------------------------ Comment views ------------------------------ #
class CommentsListView(APIView):

    permission_classes = [AllowAny]

    def get(self, request, blog_slug):
        blog = get_object_or_404(Blog, slug=blog_slug)
        comments = Comment.objects.filter(blog=blog)
        comment_serializer = CommentSerializer(comments, many=True)
        return Response(data=comment_serializer.data, status=status.HTTP_200_OK)


class CommentsAggregateView(APIView):

    permission_classes = [AllowAny]

    def get(self, request: Request, blog_slug) -> Response:
        blog = get_object_or_404(Blog, slug=blog_slug)
        total = Comment.objects.filter(blog=blog).count()
        return Response(data={'total': total}, status=status.HTTP_200_OK)
    

class CommentPostView(CreateAPIView):

    permission_classes = [AllowAny]
    serializer_class = CommentSerializer

    def post(self, request: Request, blog_slug: str) -> Response:
        
        try:
            blog = get_object_or_404(Blog, slug=blog_slug)
            
            data = {}
            data['blog'] = str(blog.id)
            data['user'] = request.user.id
            data['content'] = request.data.get('content', '')
            print(request.headers.get('Authorization'))

            comment_serializer = CommentSerializer(data=data)
            if comment_serializer.is_valid(raise_exception=True):
                comment_serializer.save()
                return Response(data={'message': 'Comment posted successfully', 'comment': comment_serializer.data}, status=status.HTTP_201_CREATED)

            return Response(data=comment_serializer.data, status=status.HTTP_400_BAD_REQUEST)
        except Blog.DoesNotExist:
            return Response(data={'message': 'Blog does not exist'}, status=status.HTTP_404_NOT_FOUND)


class CommentDetailView(APIView):

    permission_classes = [IsAuthenticated]

    def put(self, request: Request, blog_id: uuid, comment_id: uuid) -> Response:
        try:
            blog = Blog.objects.get(pk=blog_id)
            comment = Comment.objects.get(pk=comment_id)

            if request.user.id != comment.user.id:
                return Response(data={'message': 'You are unauthorized to update the requested comment'}, status=status.HTTP_401_UNAUTHORIZED)

            comment_serializer = CommentSerializer(
                instance=comment, data=request.data, partial=True)
            if comment_serializer.is_valid(raise_exception=True):
                comment_serializer.save()
                return Response(data={'message': 'Comment updated successfully'}, status=status.HTTP_200_OK)

            return Response(data=comment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except (Blog.DoesNotExist, Comment.DoesNotExist) as e:
            if isinstance(e, Blog.DoesNotExist):
                return Response(data={'message': 'Blog does not exist'}, status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(data={'message': 'Comment does not exist'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request: Request, blog_id: uuid, comment_id: uuid) -> Response:
        try:
            blog = Blog.objects.get(pk=blog_id)
            comment = Comment.objects.get(pk=comment_id)
            comment.delete()
            return Response(data={'message': 'Comment deleted successfully'}, status=status.HTTP_200_OK)
        except (Blog.DoesNotExist, Comment.DoesNotExist) as e:
            if isinstance(e, Blog.DoesNotExist):
                return Response(data={'message': 'Blog does not exist'}, status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(data={'message': 'Comment does not exist'}, status=status.HTTP_404_NOT_FOUND)
            

