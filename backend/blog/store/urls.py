from django.urls import include, path
from rest_framework import routers

from store.views.item_views import ItemsViewSet
from store.views.order_items_views import OrderItemViewSet
from store.views.order_views import OrderViewSet

router = routers.DefaultRouter()
router.register(r'items', ItemsViewSet, basename='items')
router.register(r'^(?P<order_id>\d+)/order-items', OrderItemViewSet, basename='order_items')
router.register(r'order', OrderViewSet, basename='order')

urlpatterns = [
    path('', include(router.urls)),

]
