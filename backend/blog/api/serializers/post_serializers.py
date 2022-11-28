from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from drf_extra_fields.fields import Base64ImageField


from posts.models import Post, Tag, Group, PostTag, Comment, Favorite, Rating
from django.db.models import Avg, Sum, Count, F

from users.models import User


class TagSerializer(serializers.ModelSerializer):
    posts = serializers.StringRelatedField(many=True)

    class Meta:
        model = Tag
        fields = ('id', 'title', 'slug', 'posts')


class TagListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ('title', 'slug')


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ('id', 'name')


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(
        read_only=True, slug_field='username',
    )

    class Meta:
        fields = ('id', 'post', 'text', 'author')
        model = Comment


class RatingSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())

    class Meta:
        fields = ('post', 'user', 'star_rating')
        model = Rating

    def validate_post(self, data):
        user = self.initial_data['user']
        post = self.initial_data['post']
        if Rating.objects.filter(user=user, post=post).exists():
            raise ValidationError('Дважды нельзя поставить лайк')
        return data


class PostToShowSerializer(serializers.ModelSerializer):
    tags = TagListSerializer(many=True)
    group = serializers.StringRelatedField()
    author = serializers.SlugRelatedField(read_only=True, slug_field='username')
    is_favorited = serializers.SerializerMethodField()
    ratings = serializers.SerializerMethodField()
    user_rating = serializers.SerializerMethodField()
    comments = CommentSerializer(many=True, required=False)

    class Meta:
        model = Post
        fields = ('id', 'author', 'title',
                  'body', 'created_at', 'group',
                  'tags', 'comments', 'is_favorited',
                  'ratings', 'user_rating', 'image')

    def get_is_favorited(self, obj):
        user = self.context['request'].user
        if user.is_anonymous:
            return False
        return Favorite.objects.filter(
            user=user.id, post=obj.id
        ).exists()

    def get_ratings(self, obj):
        data_1 = Rating.objects.values('star_rating', 'post').filter(
            post=obj.id).aggregate(
            amount_stars=Count('star_rating'),
            avg_rating=Sum('star_rating')/Count('star_rating')
        )
        return data_1

    def get_user_rating(self, obj):
        user = self.context['request'].user
        if user.is_anonymous:
            return None
        data_1 = Rating.objects.values_list(
                'star_rating', flat=True).filter(
                post=obj.id, user=user)
        return data_1[0] if data_1 else None


class PostCreateSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        many=True,
        queryset=Tag.objects.all(),
        required=False,
        slug_field='title'
    )
    group = serializers.PrimaryKeyRelatedField(
        queryset=Group.objects.all(),
        required=False
    )
    author = serializers.SlugRelatedField(
        read_only=True, slug_field='username',
    )
    image = Base64ImageField(required=False)

    class Meta:
        model = Post
        fields = ('id', 'author', 'title', 'body', 'created_at', 'group', 'tags', 'image')

    def create(self, validated_data):
        if 'tags' in validated_data:
            tags = validated_data.pop('tags')
            post = Post.objects.create(**validated_data)
            post.tags.set(tags)
            return post
        post = Post.objects.create(**validated_data)
        return post

    def update(self, instance, validated_data):
        if 'tags' not in validated_data or 'comments' not in validated_data:
            return super().update(instance, validated_data)
        data = validated_data.pop('tags')
        instance.tags.clear()
        instance.tags.set(data)
        return super().update(instance, validated_data)


