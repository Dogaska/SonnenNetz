from rest_framework.serializers import CharField, ModelSerializer, StringRelatedField, SerializerMethodField
from .models import Chat, Message
from .utils import get_user_contact

class MessageSerializer(ModelSerializer):
    
    username = CharField(source='contact.user.username', read_only=True)
    first_name = CharField(source='contact.user.first_name', read_only=True)
    last_name = CharField(source='contact.user.last_name', read_only=True)
    
    class Meta:
        model = Message
        fields = ['contact', 'message', 'timestamp', 'image', 
                  'username', 'first_name', 'last_name']
        
class ContactSerializer(StringRelatedField):
    def to_internal_value(self, value):
        return value

class ChatSerializer(ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)
    participants = ContactSerializer(many=True)


    class Meta:
        model = Chat
        fields = ['id', 'participants', 'messages', 'viewer']
        read_only = ('id')

    def create(self, validated_data):
        participants = validated_data.pop('participants')
        chat = Chat()
        chat.save()
        for username in participants:
            contact = get_user_contact(username)
            chat.participants.add(contact)
        chat.save()
        return chat
