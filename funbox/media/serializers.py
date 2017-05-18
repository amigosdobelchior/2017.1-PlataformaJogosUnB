from rest_framework import serializers
from media.models import Media, Image, Video, Soundtrack


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = ['image', 'role']


class VideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = ['video', 'role']


class SoundtrackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Soundtrack
        fields = ['soundtrack', 'role']
