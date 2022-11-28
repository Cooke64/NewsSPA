import django_filters as f

from posts.models import Tag, Post, Group


class PostFilter(f.FilterSet):
    author = f.CharFilter(method='get_is_author')
    tags = f.ModelMultipleChoiceFilter(
        queryset=Tag.objects.all(),
        field_name='tags__slug',
        to_field_name='slug',
    )
    group = f.CharFilter(method='get_group')

    def get_is_author(self, queryset, name, value):
        return queryset.filter(author__username=value)

    def get_group(self, queryset, name, value):
        return queryset.filter(group__name=value)

    class Meta:
        model = Post
        fields = (
            'author', 'tags'
        )