// function doWork(data, callback){
//   callback('done');
// }
//
// function doWorkPromise(data){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       reject('everything is broken');
//     }, 1000);
//     // reject({
//     //   error: 'Something bad happened'
//     // });
//   });
// }
//
// doWorkPromise('some data').then(function (data){
//   console.log(data);
// }, function(error){
//   console.log(error)
// });

var request = require('request');

function getWeather(location){
  return new Promise(function(resolve,reject){
      var encodedLocation = encodeURIComponent(location);
      var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + encodedLocation + '&appid=ae4185bbf9c70b5658c59fbc9de29b8a';
      if(!location){
        return reject('No location provided');
      }

      request.get({url: url, json: true}, function(error, res, body){
        if(error){
          reject('Unable to fetch weather');
        } else {
            name = JSON.stringify(body.name);
            resolve("It's " + body.list[0].main.temp + ' in ' + body.city.name + '!');
        }
      });

  })
}

getWeather('san francisco').then(function(currentWeather){
  console.log(currentWeather);
}, function(error){
  console.log(error);
})

//
// var encodedLocation = encodeURIComponent(location);
// var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + encodedLocation + '&appid=ae4185bbf9c70b5658c59fbc9de29b8a';
// if(!location){
//   return callback('No location provided');
// }
//
// request.get({url: url, json: true}, function(error, res, body){
//   if(error){
//     // console.log('Unable to fetch weather');
//     callback('Unable to fetch weather');
//   } else {
//     name = JSON.stringify(body.name);
//     callback("It's " + body.list[0].main.temp + ' in ' + body.city.name + '!');
//   }
// });
