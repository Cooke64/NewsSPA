from rest_framework.viewsets import ModelViewSet

from store.models import Order
from store.serializers.order_serializer import (
    OrderWriteSerializer,
    OrderReadSerializer
)


class OrderViewSet(ModelViewSet):

    def get_queryset(self):
        user = self.request.user.pk
        return Order.objects.filter(user=user)

    def get_serializer_class(self):
        if self.action in ('create', 'update', 'partial_update', 'destroy'):
            return OrderWriteSerializer

        return OrderReadSerializer
