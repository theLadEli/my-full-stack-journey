/*
 http://localhost:3000/api/user/:userId
 whatever you input after user/, express will parse as the user id. So if you go to: http://localhost:3000/api/user/hello then req.params.userId will be "hello".
req.params is an object, and we have defined the route as /api/user/:userId which means the property key of the object will be .userId, but lets say the route was:
/api/user/:accountId then the property key would be req.params.accountId!
*/

const express = require('express')
const app = express()
const port = 3000;
app.get('/api/user/:userId', (req, res) => { // route with params
  console.log(req.params);
});