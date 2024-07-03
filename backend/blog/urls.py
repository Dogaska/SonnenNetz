from django.urls import path

from .views import (AllBlogsListView, BlogDetailView, CommentsListView, 
                    CommentsAggregateView, CommentPostView, CommentDetailView)


urlpatterns = [
    # Blog urls
    path('all/', AllBlogsListView.as_view()),
    path('<slug>/', BlogDetailView.as_view()),

    # Comment urls
    path('<blog_slug>/comments/all/',
         CommentsListView.as_view()),
    path('<blog_slug>/totalcomments/',
         CommentsAggregateView.as_view()),
    path('<blog_slug>/commentpost/',
         CommentPostView.as_view()),
    path('<blog_slug>/comment/<uuid:comment_id>/',
         CommentDetailView.as_view()),
]