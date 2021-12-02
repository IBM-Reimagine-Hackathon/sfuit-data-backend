# SFUIT-data-backend

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)


## IBM IOT DATA GATEWAY

**You send request:**  

**URL** : `https://3890e7f1.us-south.apigw.appdomain.cloud/data`

**IOT ENDPOINT : `xxx.messaging.internetofthings.ibmcloud.com`**

**Method** : `GET`

**Auth required** : NO

**Request:**
`io.Connect()`
```
**Status 200:**
```json
HTTP/1.1 200 OK

Socket Connected Object
```
**Status 403:**
```json
HTTP/1.1 401 Bad Response
CORS Error
```

**Socket Events**

- `socket.on(deviceID)` return below Sensor JSON Data

`{
data:{device_id:"123",
      Pulse:80,
      Spo2:98%,
      temperature:32 %C,
      ECG:220
      }
}`

**Dependencies**
1. Express
2. Mongoose
3. IBM WATSON IOT
4. Mqtt js
5. Socket IO

**License**

Copyright © 2021 APROR.
