from rest_framework import serializers

from store.models import Order, OrderItem
from store.serializers.order_item_serializer import OrderItemSerializer


class OrderReadSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username', read_only=True)
    order_items = OrderItemSerializer(read_only=True, many=True)
    total_cost = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = (
            'user', 'order_items', 'total_cost', 'status', 'created', 'updated'
        )

    def get_total_cost(self, obj):
        return obj.total_cost


class OrderWriteSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    order_items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ('id', 'user', 'order_items',)
        read_only_fields = ('status', )

    def create(self, validated_data):
        orders_data = validated_data.pop('order_items')
        order = Order.objects.create(**validated_data)
        for order_data in orders_data:
            OrderItem.objects.create(order=order, **order_data)
        return order

    def update(self, instance, validated_data):
        orders_data = validated_data.pop('order_items', None)
        orders = list(instance.order_items.all())

        if orders_data:
            for order_data in orders_data:
                order = orders.pop(0)
                order.product = order_data.get('product', order.product)
                order.quantity = order_data.get('quantity', order.quantity)
                order.save()

        return instance
