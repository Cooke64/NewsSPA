from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from api.filters import PostFilter
from api.permissions import AuthorOrReadOnly
from api.serializers.post_serializers import (
    TagSerializer,
    GroupSerializer,
    CommentSerializer,
    RatingSerializer,
    PostCreateSerializer,
    PostToShowSerializer
)
from posts.models import Post, Tag, Group, Favorite, Rating


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.items.get_all()
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)
    filterset_class = PostFilter
    permission_classes = (AuthorOrReadOnly,)
    search_fields = ('title',)
    ordering_fields = ('title', 'created_at')

    def get_serializer_class(self):
        if self.request.method in ('POST', 'PATCH'):
            return PostCreateSerializer
        return PostToShowSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(
        methods=['post', 'delete'],
        detail=False,
        url_path=r'(?P<pk>\d+)/favorite'
    )
    def deal_with_favorite(self, request, pk=None):
        method = request.method
        user = request.user
        post = get_object_or_404(Post, pk=pk)
        if method == 'POST':
            if not Favorite.objects.filter(user=user, post=post).exists():
                Favorite.objects.get_or_create(user=user, post=post)
                return Response({'message': 'added'})
        instance = get_object_or_404(Favorite, user=user, post=post)
        instance.delete()
        return Response({'message': 'deleted'})

    @action(
        methods=['post', 'delete'],
        detail=False,
        url_path=r'(?P<pk>\d+)/rating'
    )
    def deal_with_rating(self, request, pk=None):
        method = request.method
        user = self.request.user.pk
        post = get_object_or_404(Post, pk=pk).pk
        if method == 'POST':
            data = {
                'user': user,
                'post': post,
                'star_rating': self.request.data.get('star_rating')
            }
            serializer = RatingSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'message': 'added'})
        if method == 'DELETE':
            instance = get_object_or_404(Rating, user=user, post=post)
            instance.delete()
            return Response({'message': 'deleted'})


class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    permission_classes = (AuthorOrReadOnly,)

    def get_queryset(self):
        post = get_object_or_404(Post, pk=self.kwargs.get('post_id'), )
        new_queryset = post.comments.all()
        return new_queryset

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
