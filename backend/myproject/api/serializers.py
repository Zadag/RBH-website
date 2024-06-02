from rest_framework import serializers

class RiotIDSerializer(serializers.Serializer):
    gameName = serializers.CharField()
    tagLine = serializers.CharField()