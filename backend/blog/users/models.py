from django.contrib.auth.models import AbstractUser
from django.core import validators
from django.db import models


class User(AbstractUser):
    """Модель пользователя."""
    USER = 'user'
    MODERATOR = 'moderator'
    ADMIN = 'admin'
    CHOICES = [
        ('admin', ADMIN),
        ('moderator', MODERATOR),
        ('user', USER)
    ]
    username = models.CharField(
        'Имя пользователя', max_length=50, blank=False, unique=True
    )
    email = models.EmailField(
        'Email',
        blank=False,
        unique=True,
        validators=[validators.validate_email]
    )
    role = models.CharField(
        'Права юзера', max_length=150, choices=CHOICES, default='user'
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['-date_joined']

    def __str__(self):
        return self.username

    @property
    def is_user(self):
        return True if not self.is_staff else None

    @property
    def is_admin(self):
        return self.role == self.ADMIN

    @property
    def is_moderator(self):
        return self.role == self.MODERATOR

    def save(self, *args, **kwargs):
        if self.role == self.is_admin:
            self.is_staff = True
        super().save(*args, **kwargs)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                related_name='profile')
    description = models.TextField(blank=True, null=True)
    image_profile = models.ImageField(blank=True, null=True)
    first_name = models.TextField('Имя', max_length=150, null=True, blank=True)
    last_name = models.TextField(
        'Фамилия',
        max_length=150,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.user.username


class Follow(models.Model):
    author = models.ForeignKey('User', on_delete=models.CASCADE,
                               related_name='follower', verbose_name='На кого')
    user = models.ForeignKey('User', on_delete=models.CASCADE,
                             related_name='subscriber', verbose_name='Кто')

    class Meta:
        verbose_name = 'Подписка'
        verbose_name_plural = 'Подписки'
        constraints = [
            models.UniqueConstraint(
                fields=('user', 'author'),
                name='unique_user_follow'
            )
        ]
