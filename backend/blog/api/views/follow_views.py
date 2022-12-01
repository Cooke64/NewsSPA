from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from api.serializers.follow_serializer import FollowListSerializer
from users.models import User, Follow


class SubscriptionsView(ListAPIView):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = FollowListSerializer

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(subscriber__user=user)


class SubscriptionsViewSet(ModelViewSet):
    @action(
        detail=True,
        permission_classes=[IsAuthenticated],
        methods=['POST']
    )
    def subscribe(self, request, **kwargs):
        author_pk = kwargs.get('pk')
        user = self.request.user
        author = get_object_or_404(User, id=author_pk)
        if Follow.objects.filter(user=user, author=author):
            return Response({'detail': 'Вы уже подписаны на автора'})
        Follow.objects.get_or_create(user=user, author=author)
        return Response({'detail': 'Вы подписались на автора'})

    @subscribe.mapping.delete
    def unsubscribe(self, request, **kwargs):
        author_pk = kwargs.get('pk')
        user = self.request.user
        author = get_object_or_404(User, id=author_pk)
        follow = Follow.objects.filter(user=user, author=author)
        if follow.exists():
            follow.delete()
            return Response({'detail': 'Вы отписались от автора'})

        return Response({'detail': 'Вы не были подписаны на данного автора'})