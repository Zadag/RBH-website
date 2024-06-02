from django.db import models

class Player(models.Model):
    name = models.CharField(max_length = 255)
    server = models.CharField(max_length = 4)
    current_rank = models.CharField(max_length = 11)
    peak_rank = models.CharField(max_length = 11)
    opgg = models.CharField(max_length = 255)
    mostPlayed = models.charField(15)
    secondMostPlayed = models.charField(15)
    thirdMostPlayed = models.charField(15)