// var API_KEY = 'ae4185bbf9c70b5658c59fbc9de29b8a'
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';
// appid=PASTE_API_KEY_HERE
console.log('Challenge');

function printInTwoSeconds(message){
  setTimeout(function(){
    console.log('print message ' + message);
  }, 2000)
}

printInTwoSeconds('hello async!');
