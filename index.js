const request = require('request');
const argv = require('yargs').argv;  
// argv allows us to define variables from the command line.


let apiKey = "This is a secret";
// let city = 'Haifa';
let city = argv.c || 'Haifa';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) { 
  
  if(err){
    console.log('error:', error);

  } else {    
   let weather = JSON.parse(body);
   // console.log('weather:', weather);
   let message = `It's ${weather.main.temp} degrees Celsius in ${weather.name}
                  and ${weather.clouds.all} percent cloudy`;
               
   console.log(message);
  }

});

