require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')




// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8d022b0ccd7c4cc292a3373df1d62250',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.use(express.static("client"));  app.get("/", (req, res) => {  
     res.sendFile("index.html"); 
    });  
    const port = process.env.PORT || process.env.SERVER_PORT;
 app.listen(port, () => console.log(`The port is running on: ${port}`));
