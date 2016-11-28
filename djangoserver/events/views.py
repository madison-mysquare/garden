import json

from django.http import HttpResponse, JsonResponse
from django.core import serializers

from .models import Event

def index(request):
    if (request.method == "GET"):
        data = serializers.serialize("json", Event.objects.all())
        return JsonResponse(json.loads(data), safe=False)
