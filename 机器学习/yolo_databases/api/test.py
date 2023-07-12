import base64
import requests

with open('16329967796715117.jpg', 'rb') as f:
    image = base64.b64encode(f.read())

data = {
    'images': image
}

response = requests.post('http://127.0.0.1:8888/', data=data)
print(response.json())
