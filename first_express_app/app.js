const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.get('/instructor/:firstName', function(req, res) {
//   return res.send(`The name of this instructor is ${request.params.firstName}.`);
// })

app.get('/', function(req, res) {
  res.json({message:`that's it!`});
})

app.listen(3000, function() {
  console.log("The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!");
})

app.use(bodyParser.json());