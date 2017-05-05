var request = require('request');
var API_KEY = 'ae4185bbf9c70b5658c59fbc9de29b8a'
// var url = 'http://api.openweathermap.org/data/2.5/forecast?q=Philadelphia&appid=ae4185bbf9c70b5658c59fbc9de29b8a'
// var weather = require('./weather.js')

module.exports = function(location, callback){
  var encodedLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + encodedLocation + '&appid=ae4185bbf9c70b5658c59fbc9de29b8a';
  if(!location){
    return callback('No location provided');
  }

  request.get({url: url, json: true}, function(error, res, body){
    if(error){
      // console.log('Unable to fetch weather');
      callback('Unable to fetch weather');
    } else {
      name = JSON.stringify(body.name);
      // console.log(JSON.stringify(body, null, 3));
      // console.log(body.list[0].main.temp);
      // console.log(weather());
      // console.log("It's " + body.list[0].main.temp + ' in ' + body.city.name + '!');
      callback("It's " + body.list[0].main.temp + ' in ' + body.city.name + '!');
    }
  });

}
