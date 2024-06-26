from rest_framework import routers
from .views import TodoViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet, basename='todos')

urlpatterns = router.urls