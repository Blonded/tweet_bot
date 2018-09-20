//console.log("The bot has started");

// this npm package is required in order for the app to function
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });


  client.get(path, params, callback);
  client.post(path, params, callback);
  client.stream(path, params, callback);
