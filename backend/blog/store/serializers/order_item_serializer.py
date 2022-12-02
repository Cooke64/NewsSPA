from django.utils.translation import gettext_lazy as _
from rest_framework import serializers

from store.models import OrderItem


class OrderItemSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField()
    cost = serializers.SerializerMethodField()

    class Meta:
        model = OrderItem
        fields = ('id', 'order', 'product', 'quantity', 'price', 'cost',)
        read_only_fields = ('order', )

    def validate(self, validated_data):
        order_quantity = validated_data['quantity']
        product_quantity = validated_data['product'].quantity

        order_id = self.context['view'].kwargs.get('order_id')
        product = validated_data['product']
        current_item = OrderItem.objects.filter(
            order__id=order_id, product=product)

        if order_quantity > product_quantity:
            error = {'quantity': _('Количество товара в заказе больше, чем доступно.Выберете меньше')}
            raise serializers.ValidationError(error)

        if not self.instance and current_item.count() > 0:
            error = {'product': _('товар уже добавлен')}
            raise serializers.ValidationError(error)

        return validated_data

    def get_price(self, obj):
        return obj.product.price

    def get_cost(self, obj):
        return obj.get_cost
