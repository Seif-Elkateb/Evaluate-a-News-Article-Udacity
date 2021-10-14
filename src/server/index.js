const express= require('express');
const path=require('path');
const app = express();
/* Dependencies */
const bodyParser = require('body-parser')
const port = 8081;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'));
// creating the server 
const listening=()=>{
  console.log("initialize server:\n")
  console.log(`server running on port ${port}`);
}
const server= app.listen(port,listening);
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('welcome')
//   console.log('"/" route new request')
// })
