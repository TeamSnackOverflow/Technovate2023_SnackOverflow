import requests

url = "https://graphhopper.com/api/1/route"

query = {
  "key": "f6fcb1e6-dff4-424a-8c59-2a2323c27351"
}
def get_loc(points):
  payload = {
    "points": points,
    "point_hints": [
      "Lindenschmitstraße",
      "Thalkirchener Str."
    ],
    "snap_preventions": [
      "motorway",
      "ferry",
      "tunnel"
    ],
    "details": [
      "road_class",
      "surface"
    ],
    "vehicle": "bike",
    "locale": "en",
    "instructions": True,
    "calc_points": True,
    "points_encoded": False
  }

  headers = {"Content-Type": "application/json"}

  response = requests.post(url, json=payload, headers=headers, params=query)

  data = response.json()
  # print(data)
  return data