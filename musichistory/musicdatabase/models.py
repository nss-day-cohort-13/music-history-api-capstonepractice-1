from django.db import models

# Create your models here.

class Artist(models.Model):
    name = models.TextField()

class Album(models.Model):
    name = models.TextField()
    artist = models.ForeignKey(Artist)

class Song(models.Model):
    name = models.TextField()
    album = models.ForeignKey(Album)
