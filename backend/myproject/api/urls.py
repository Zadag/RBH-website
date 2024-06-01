from django.urls import path
from .views import AccountInfoAPIView

urlpatterns = [
    path('account-info-by-riot-id/<str:game_name>/<str:tag_line>/'),
]