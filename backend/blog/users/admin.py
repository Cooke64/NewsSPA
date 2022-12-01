from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from users.models import User, Profile, Follow


@admin.register(User)
class UserAdmin(UserAdmin):
    list_display = (
        'username',
        'is_staff',
        'role'
    )
    search_fields = ('username',)
    list_editable = ('role', 'is_staff',)
    empty_value_display = '-empty-'
    fieldsets = (
        ('Персональные данные',
         {'fields': ('username', 'email')}),
        ('Административные права',
         {'fields': ('role', 'is_superuser',)}),
        ('Прочее', {'fields': ('password',)}),
    )


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'username',
        'email'
    )
    search_fields = ('username',)

    def username(self, obj):
        return obj.user.username

    def email(self, obj):
        return obj.user.email

    username.short_description = 'Логин пользователя'
    email.short_description = 'Email пользователя'


@admin.register(Follow)
class FollowAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'author')
    list_display_links = ('user',)
    search_fields = ('user',)
