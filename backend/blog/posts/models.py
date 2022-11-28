from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.template.defaultfilters import slugify

from users.models import User


class PostManager(models.Manager):
    def get_all(self):
        return super(PostManager, self).get_queryset().select_related(
            'group').prefetch_related('tags').all()


class Post(models.Model):
    title = models.CharField('Заголовок', max_length=199)
    body = models.TextField('Текст публикации', )
    created_at = models.DateTimeField('Дата публикации', auto_now_add=True)
    group = models.ForeignKey('Group', on_delete=models.CASCADE, null=True,
                              blank=True)
    tags = models.ManyToManyField(
        'Tag',
        through='PostTag',
        verbose_name='Тэги',

    )
    image = models.ImageField(upload_to='posts/', null=True, blank=True)
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Автор поста',
    )

    objects = models.Manager()
    items = PostManager()

    class Meta:
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'
        default_related_name = 'posts'

    def __str__(self):
        return self.title[:10]


class Group(models.Model):
    name = models.CharField(max_length=128)

    objects = models.Manager()

    def __str__(self):
        return self.name


class Tag(models.Model):
    title = models.CharField('Тэг', max_length=200)
    slug = models.SlugField('URL', unique=True)

    objects = models.Manager()

    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Tag, self).save(*args, **kwargs)


class Comment(models.Model):
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        verbose_name='Пост'
    )

    text = models.TextField('Текст комментария', )
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Автор комментария',
    )

    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'
        default_related_name = 'comments'

    def __str__(self):
        return self.text[:15]


class PostTag(models.Model):
    tag = models.ForeignKey(
        Tag,
        on_delete=models.CASCADE,
        related_name='tags',
        verbose_name='Тег'
    )
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name='tags_ref',
        verbose_name='Тег'
    )

    class Meta:
        verbose_name = 'Тэг'
        verbose_name_plural = 'Тэги'


class Favorite(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь'
    )
    post = models.ForeignKey(
        'Post',
        on_delete=models.CASCADE,
        verbose_name='Пост'
    )

    class Meta:
        verbose_name = 'Избранный пост'
        verbose_name_plural = 'Избранные посты'
        default_related_name = 'favorites'


class Rating(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь'
    )
    post = models.ForeignKey(
        'Post',
        on_delete=models.CASCADE,
        verbose_name='Пост'
    )
    star_rating = models.IntegerField(
        'Оценка', validators=[MinValueValidator(0), MaxValueValidator(5)])

    class Meta:
        verbose_name = 'Оценка пост'
        verbose_name_plural = 'Оценки постам'
        default_related_name = 'ratings'
