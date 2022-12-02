from rest_framework import serializers

from store.models import Item


class ItemSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('name', 'price')
