from rest_framework import serializers

from posts.models import Post
from users.models import User, Follow


class FollowPostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'image', )


class FollowListSerializer(serializers.ModelSerializer):
    subscribers_list = serializers.SerializerMethodField()
    posts_list = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('username', 'posts_list', 'subscribers_list')

    def get_subscribers_list(self, obj: User):
        user = self.context['request'].user
        if user.is_anonymous:
            return None
        return Follow.objects.filter(user=user, author=obj).exists()

    def get_posts_list(self, obj: User):
        posts = obj.posts.all()
        return FollowPostSerializers(posts, many=True).data
