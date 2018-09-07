// NPM modules
const request = require('request');

var getWeather = () => {
    request({
        url : 'https://api.darksky.net/forecast/beb95027f90455ecd01a921c54fe56b0',
        json : true
    },(error , response , body) => {
        if(error){
            console.log("unable to reach servers");
        }else if(response.statusCode === 400){
            console.log("unable to fetch weather");
        }else if(response.statusCode === 200){
            console.log(`temperature is ${body.currently.temperature}`);
        }
    });
};

module.exports = {
    getWeather
};