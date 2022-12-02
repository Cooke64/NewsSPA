from django.contrib import admin

from store.models import Item, Order, OrderItem


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'name',
        'price'
    )


admin.site.register(Order)
admin.site.register(OrderItem)
