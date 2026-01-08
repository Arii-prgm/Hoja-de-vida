from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    tag = models.CharField(max_length=30, blank=True)
    repo_url = models.URLField(blank=True)
    demo_url = models.URLField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
