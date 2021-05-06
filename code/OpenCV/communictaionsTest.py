import requests
x = requests.get('http://localhost:3000/API/version')
#print(x.status_code)
print(x.text)

#should return the API Version specified in the nodeJS Server
