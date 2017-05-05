var url = 'http://ipinfo.io'
var request = require('request');

module.exports = function(callback){

  request.get({
    url: url,
    json: true
  }, function(error, res, body){
    if(error){
      callback();
    } else {
      callback(body);
    }
  });

}
