// NPM modules
const request = require('request');

var getWeather = (lat , long) => {
    request({
        url : `https://api.darksky.net/forecast/beb95027f90455ecd01a921c54fe56b0/${lat},${long}`,
        json : true
    },(error , response , body) => {
        if(error){
            callback("unable to reach servers");
        }else if(response.statusCode === 400){
            callback("unable to fetch weather");
        }else if(response.statusCode === 200){
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            });
        }
    });
};

module.exports = {
    getWeather
};