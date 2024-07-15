import django_filters
from django.db.models import Q
from .models import Blog

class BlogFilter(django_filters.FilterSet):
    search = django_filters.CharFilter(method='multi_field_search', label="Search")

    class Meta:
        model = Blog
        fields = {
            'category': ['exact'],
            'level': ['exact'],
        }

    def multi_field_search(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(title__icontains=value) |
                Q(content__icontains=value) |
                Q(category__icontains=value) |
                Q(level__icontains=value) |
                Q(author__username__icontains=value)

            )
        return queryset
    
#class BlogFilter(django_filters.FilterSet):
#    title = django_filters.CharFilter(lookup_expr='iexact')
#
#    class Meta:
#        model = Blog
#        fields = ['level', 'category', 'title']