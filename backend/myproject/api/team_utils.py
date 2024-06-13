# team_utils.py

from django.core.exceptions import ValidationError
from .teams import Team

def add_player_to_team(team, player):
    existing_teams = Team.objects.filter(tournament_number=team.tournament_number, members=player)
    if existing_teams.exists():
        raise ValidationError("Player is already on a team for this tournament.")
    else:
        team.members.add(player)