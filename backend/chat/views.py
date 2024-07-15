from django.shortcuts import get_object_or_404
from rest_framework import permissions, status 
from rest_framework.response import Response
from .models import Chat, Contact
from .serializers import ChatSerializer, MessageSerializer
from rest_framework.viewsets import ViewSet
from .utils import get_last_10_messages, get_user_contact
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)

class ChatMultiModalView(ViewSet):

    permission_classes = [permissions.AllowAny]

    def list(self, request):
        # This method returns all chats, no user-specific filtering
        chats = Chat.objects.all()
        serializer = ChatSerializer(chats, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    #def list(self, request):
    #    print(request.data)
    #    user = request.user
    #    print(user)
    #    contact = get_object_or_404(Contact, user=user)
    #    print(contact)
    #    chat_query_set = contact.chats.all()
    #    chat_serializer = ChatSerializer(chat_query_set, many=True)
    #    print(chat_serializer.data)
    #    return Response(data=chat_serializer.data, status=status.HTTP_200_OK)
    
   # def get_last_10_messages(self, request, chat_id=None):
   #     messages = get_last_10_messages(chat_id)
   #     message_serializer = MessageSerializer(messages, many=True)
   #     return Response(data=message_serializer.data, status=status.HTTP_200_OK)

   # def get_user_contact(self, request, username=None):
   #     contact = get_user_contact(username)
   #     return Response(data={'username': contact.user.username, 'id': contact.id}, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk=None):

        chat = get_object_or_404(Chat, pk=pk)
        serializer = ChatSerializer(chat)
        serializer.data["viewer"] = request.user.id
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    
    
class ChatListView(ListAPIView):
    serializer_class = ChatSerializer
    permission_classes = (permissions.AllowAny, )

    def get_queryset(self):
        queryset = Chat.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            contact = get_user_contact(username)
            queryset = contact.chats.all()
        return queryset



