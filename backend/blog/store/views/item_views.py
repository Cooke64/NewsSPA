from rest_framework.viewsets import ModelViewSet

from store.models import Item
from store.serializers.item_serializer import ItemSimpleSerializer


class ItemsViewSet(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSimpleSerializer
