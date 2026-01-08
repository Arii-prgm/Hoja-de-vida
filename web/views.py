from django.shortcuts import render
from .models import Project

def home(request):
    projects = Project.objects.order_by('-created_at')
    return render(request, "index.html", {"projects": projects})
