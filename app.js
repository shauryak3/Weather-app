//NPM modules
const request = require('request');

request({
    url : 'https://maps.googleapis.com/maps/apigeocode/json?address=Sector%2010A%20Gurgaon%20Haryana',
    json : true
},(error , response , body) => {
    console.log(body);
});