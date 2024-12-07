import os
import requests

from atproto import Client, models
from atproto.exceptions import BadRequestError

# Valencia, Spain
latitude = 39.47
longitude = -0.376389


def get_max_temperature_in_next_24h(lat, long):
    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={long}&hourly=temperature_2m"
    result = requests.get(url)
    temperatures_24h = result.json()["hourly"]["temperature_2m"][:24]
    return max(temperatures_24h)

def main() -> None:
    client = Client()
    client.login(os.environ['USERNAME'], os.environ['PASSWORD'])

    try:
        current_profile_record = client.app.bsky.actor.profile.get(client.me.did, 'self')
        current_profile = current_profile_record.value
        swap_record_cid = current_profile_record.cid
    except BadRequestError:
        current_profile = swap_record_cid = None

    old_description = old_display_name = None
    if current_profile:
        old_description = current_profile.description
        old_display_name = current_profile.display_name

    # set new values to update
    new_description = old_description
    max_temperature_24h= get_max_temperature_in_next_24h(latitude, longitude)
    new_display_name = f"Aquí, trabajando a {int(round(max_temperature_24h,0))}⁰C"

    client.com.atproto.repo.put_record(
        models.ComAtprotoRepoPutRecord.Data(
            collection=models.ids.AppBskyActorProfile,
            repo=client.me.did,
            rkey='self',
            swap_record=swap_record_cid,
            record=models.AppBskyActorProfile.Record(
                avatar=current_profile.avatar,  # keep old avatar. to set a new one, you should upload blob first
                banner=current_profile.banner,  # keep old banner. to set a new one, you should upload blob first
                description=new_description or old_description,
                display_name=new_display_name or old_display_name,
            ),
        )
    )


if __name__ == '__main__':
    main()