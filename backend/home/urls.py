from rest_framework import routers
from .api import PersonViewSet

router = routers.DefaultRouter()
router.register('api/model', PersonViewSet, 'model')

urlpatterns = router.urls