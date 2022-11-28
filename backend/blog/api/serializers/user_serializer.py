from djoser.serializers import UserSerializer
from rest_framework import serializers

from users.models import User, Profile


class ProfileSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='image_profile')
    post_by_user = serializers.SerializerMethodField()
    comments_by_user = serializers.SerializerMethodField()
    favorite_by_user = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = ('first_name', 'last_name', 'image', 'post_by_user', 'comments_by_user', 'favorite_by_user')

    def get_post_by_user(self, obj):
        return obj.user.posts.count()

    def get_comments_by_user(self, obj):
        return obj.user.comments.count()

    def get_favorite_by_user(self, obj):
        return obj.user.favorites.count()


class CustomUserSerializer(UserSerializer):
    class Meta:
        model = User
        fields = ('email', 'id', 'username', 'password')


class UserToShowSerializer(CustomUserSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ('username', 'role', 'is_staff', 'is_active', 'profile')

