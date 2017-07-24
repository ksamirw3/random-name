# Random name

a [Sails](http://sailsjs.org) application

make sure you install docker-compose in your machine   "sudo apt-get install docker-compose"

cd imessage folder the type "docker-compose up"

**Front Test**

`http://localhost:1337


**API Test**

* get random name

http://localhost:1337/randomName/

http://localhost:1337/randomName/?gender=male

http://localhost:1337/randomName/?gender=female

* Post random-name

`POST http://localhost:1337/randomName/create`

`{ `
`"RandomName" : {`
	 `"name": "Karim",`
     `"gender" : "male"`
	`}`
 `}`

* post random data

`POST http://localhost:1337/randomName/create`

`{ `
`"RandomName" : {`
     `"name": "",`
     `"gender" : ""`
	`}`
 `}`


* Update name

`POST http://localhost:1337/randomName/update/59764668f489410700b401df`

`{ `
`"RandomName" : {`
     `"name": "Karim Samir",`
     `"gender" : "male"`
	`}`
 `}`




## Manual install

1. change the database setting config/connections.js

1. npm install

1. sails lift
