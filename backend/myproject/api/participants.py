from django.db import models

class Player(models.Model):
    name = models.CharField(max_length = 255)
    tagline = models.CharField(max_length=5)
    server = models.CharField(max_length = 4)
    current_rank = models.CharField(max_length = 11)
    peak_rank = models.CharField(max_length = 11)
    opgg = models.CharField(max_length = 255)
    mostPlayed = models.charField(15)
    secondMostPlayed = models.charField(15)
    thirdMostPlayed = models.charField(15)
    mostPlayedRole = models.charField(15)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['name', 'tagline'], name='unique_name_tagline')
        ]