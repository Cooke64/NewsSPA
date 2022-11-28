from django.urls import include, path
from rest_framework import routers

from api.views.post_views import (
    PostViewSet,
    TagsViewSet,
    GroupViewSet,
    CommentViewSet
)


router = routers.DefaultRouter()
router.register(r'posts', PostViewSet, )
router.register('tags', TagsViewSet, basename='tags')
router.register('groups', GroupViewSet, basename='groups')
router.register(
    r'posts/(?P<post_id>\d+)/comments',
    CommentViewSet, basename='comments'
)


urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]
