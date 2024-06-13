from django.db import models
from .participants import Player
from .tournaments import Tournament

## Specifies a team in a specific tournament
class Team(models.Model):
    name = models.CharField(max_length = 255) # Add a field for name of the team
    members = models.ManyToManyField(Player) # Add a field for the players on that team
    tournament_number = models.ForeignKey(Tournament, on_delete=models.CASCADE) # Foreign key referencing tournaments.py
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['name', 'tournament_number'], name='unique_name_tournament')
        ]