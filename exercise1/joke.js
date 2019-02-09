const request = require('request');

const options = {
  url: `https://icanhazdadjoke.com/`,
  method: 'GET',
  headers: {
    Accept: 'application/json',
  }
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    const joke = info.joke;
    console.log(joke);
  }
}

request(options, callback);
