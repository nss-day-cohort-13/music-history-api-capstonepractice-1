from rest_framework import serializers
from musicdatabase.models import Artist, Album, Song

# Using the HyperlinkedModelSerializer will examine the relationships
# between the models, and the data, and provide a hyperlink to the
# related resource instead of the primary key
#   http://www.django-rest-framework.org/tutorial/5-relationships-and-hyperlinked-apis/#hyperlinking-our-api

class ArtistSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Artist
    fields = ('id', 'url', 'name')

class AlbumSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Album
    fields = ('id', 'url', 'name', 'artist')

class SongSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Song
    fields = ('id', 'url', 'name', 'album')