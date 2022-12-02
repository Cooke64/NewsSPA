from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet

from store.models import OrderItem, Order
from store.serializers.order_item_serializer import OrderItemSerializer


class OrderItemViewSet(ModelViewSet):
    serializer_class = OrderItemSerializer

    def get_queryset(self):
        order_id = self.kwargs.get('order_id')
        return OrderItem.objects.filter(order__id=order_id)

    def perform_create(self, serializer):
        order = get_object_or_404(Order, id=self.kwargs.get('order_id'))
        serializer.save(order=order)
