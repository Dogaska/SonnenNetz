from math import ceil
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

class CustomPageNumberPagination(PageNumberPagination):
    page_size = 12

    def generate_response(self, query_set, serializer, request, total=None):
        try:
            page_data = self.paginate_queryset(query_set, request)
            if page_data is None:
                raise NotFound('No results found for the requested page')
        except NotFound:
            return Response({"message": "No results found for the requested page"}, status=404)

        serialized_page = serializer(page_data, many=True)
        if total is not None:
            total_pages = ceil(total / self.page_size)
            return self.get_paginated_response({
                'total_pages': total_pages,
                'result': serialized_page.data
            })
        return self.get_paginated_response(serialized_page.data)