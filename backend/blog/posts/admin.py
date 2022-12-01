from django.contrib import admin

from .models import Post, Tag, Comment, PostTag, Group, Favorite, Rating


class TagInline(admin.TabularInline):
    model = PostTag
    extra = 3


class CommentInline(admin.TabularInline):
    model = Comment
    extra = 1


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = (TagInline, CommentInline, )
    list_display = (
        'pk',
        'title',
    )
    search_fields = ('title',)


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'title',
    )
    search_fields = ('title',)
    prepopulated_fields = {'slug': ('title',)}


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'post_id'
    )


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'name'
    )


@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ('user', 'post')
    list_filter = ('user', 'post')


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'star_rating')
    list_filter = ('user', 'post', 'star_rating')
