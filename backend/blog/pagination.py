from rest_framework import pagination, status
from rest_framework.exceptions import NotFound as NotFoundError
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from math import ceil

NUM_OF_BLOG_PER_PAGE = 6

class CustomPageNumberPagination(PageNumberPagination):
    page_size = NUM_OF_BLOG_PER_PAGE

    def generate_response(self, query_set, serializer, request: Request, total=None) -> Response:
        try:
            page_data = self.paginate_queryset(query_set, request)
        except NotFoundError:
            return Response({"message": "No results found for the requested page"}, status=status.HTTP_400_BAD_REQUEST)

        serialized_page = serializer(page_data, many=True)

        if total:
            total_pages = ceil(total / self.page_size)
            return self.get_paginated_response({
                'total_pages': total_pages,
                'result': serialized_page.data
            })

        return self.get_paginated_response(serialized_page.data)
