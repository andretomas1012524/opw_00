let request = require('request');
 
let apiKey = '5580045dbfbbbd5034a23c29f7a87d7a';
let cidade = 'Guarda';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
 
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});