from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChatMultiModalView

router = DefaultRouter()
router.register("", ChatMultiModalView, basename="chat")


chat_list = ChatMultiModalView.as_view({
    'get': 'list'
})

chat_messages = ChatMultiModalView.as_view({
    'get': 'get_last_10_messages'
})

user_contact = ChatMultiModalView.as_view({
    'get': 'get_user_contact'
})

current_chat = ChatMultiModalView.as_view({
    'get': 'get_current_chat'
})

urlpatterns = [
    path('', include(router.urls)),
    
]
