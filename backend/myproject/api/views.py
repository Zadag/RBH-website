from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import requests


class AccountInfoAPIView(api_view):
    def get(self,request,gameName,tagLine):
        api_key = 'RGAPI-f6164cf0-d440-46fd-8e3a-15204e300d37'
        region = 'na1'

        url = f'https://{region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}'
        headers = {'X-Riot-Token': api_key}

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            return Response(response.json(),status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Failed to fetch account info'}, status=response.status_code)
