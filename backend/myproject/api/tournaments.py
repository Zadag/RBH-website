# api/models.py

from django.db import models

class Tournament(models.Model):
    tournament_number = models.IntegerField(primary_key=True)  # Add a field for tournament number
    start_date = models.DateField()
    end_date = models.DateField()
    # Add more fields as needed