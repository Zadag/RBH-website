import requests

def fetch_opgg_profile(name, tagline):
    # Construct the API request URL with the player's name and tagline
    url = f"https://api.op.gg/api/search/accountName={name}&tag={tagline}"

    # Make a GET request to the op.gg API
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        # Extract the op.gg profile link or other relevant information
        opgg_profile_link = data.get("profile_link")
        return opgg_profile_link
    else:
        # Handle errors, e.g., by logging or raising an exception
        response.raise_for_status()