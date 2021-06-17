import requests

################## GET ###########################

x = requests.get('http://localhost:3000/API/version')
#print(x.status_code)
print(x.text)

#should return the API Version specified in the nodeJS Server
################## POST ###########################

myobj = {"data": "UwU"};

y = requests.post("http://localhost:3000/API/test", myobj);
print("respond from send: " + y.text);