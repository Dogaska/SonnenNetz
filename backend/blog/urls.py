from django.urls import path

from .views import (AllBlogsListView, BlogDetailView, CommentsListView, 
                    CommentsAggregateView, CommentPostView, CommentDetailView)


urlpatterns = [
    # Blog urls
    path('all/', AllBlogsListView.as_view()),
    path('<slug>/', BlogDetailView.as_view()),

]