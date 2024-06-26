from django.contrib.auth import get_user_model

User = get_user_model()

class EmailAuthBackend:
    def authenticate(self, request, email=None, password=None):
        try:
            User.objects.get(email=email)
            if User.check_password(password):
                return User
        except User.DoesNotExist:
            return None
        
    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None