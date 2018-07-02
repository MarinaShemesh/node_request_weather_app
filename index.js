const request = require('request');

let apiKey = "d703871f861842b79c60988ccf3b17ec";
let city = 'haifa';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) { 
  
  if(err){
    console.log('error:', error);
  } else {
    // console.log('weather:', weather);
   let weather = JSON.parse(body);
   let message = `It's ${weather.main.temp} degrees in
               ${weather.name}`;
               
   console.log(message);
  }

});

