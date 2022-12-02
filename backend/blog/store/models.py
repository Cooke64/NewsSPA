from decimal import Decimal

from django.contrib.auth import get_user_model
from django.db import models
from django.utils.functional import cached_property

User = get_user_model()


class Item(models.Model):
    name = models.CharField(max_length=123)
    price = models.DecimalField(max_digits=10, decimal_places=2)


class Order(models.Model):

    class OrderStatus(models.TextChoices):
        PAID = 'paid'
        UNPAID = 'no_paid'
        DELIVERED = 'delivered'

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(
        'OrderStatus',
        choices=OrderStatus.choices,
        default=OrderStatus.UNPAID,
        max_length=10,
    )

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return self.user.username

    @cached_property
    def total_cost(self):
        return Decimal(sum(order_item.get_cost for order_item in self.order_items.all()))


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, related_name='order_items', on_delete=models.CASCADE)
    product = models.ForeignKey(
        Item, related_name='items', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.order.user.username

    @cached_property
    def get_cost(self):
        return self.product.price * self.quantity
