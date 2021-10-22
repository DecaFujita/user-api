from django.contrib import admin
from .models import UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    fields = ('user', 'image', 'is_premium', 'bio')
    list_display = ('id', 'user', 'image', 'is_premium')
