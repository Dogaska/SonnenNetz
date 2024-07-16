from math import ceil
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

NUM_OF_OFFER_PER_PAGE = 10

class CustomPageNumberPagination(PageNumberPagination):
    page_size = NUM_OF_OFFER_PER_PAGE

    def generate_response(self, serialized_data, total=None):

        if total is not None:
            total_pages = ceil(total / self.page_size)
            return self.get_paginated_response({
                'total_pages': total_pages,
                'result': serialized_data
            })
        return self.get_paginated_response(serialized_data)