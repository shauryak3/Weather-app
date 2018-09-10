// NPM modules
const request = require('request');


var geocodeAddress = (address) => {
    var encodedAddress = decodeURIComponent('address');
    request({
        url : `https://cloud.google.com/maps-platform/maps/apigeocode/json?address=${encodedAddress}`,
        json : true
    },(error , response , body) => {
        if(error) {
            callback('Unable to connect to google servers');
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('unable to find the address');
        }
        else if(body.status === 'OK'){
            callback(undefined,{
                address : body.results[0].formatted_address,
                lat : body.results[0].geometry.location.lat,
                long : body.results[0].geometry.location.lng
            });
        }    
    });
};

module.exports = {
    geocodeAddress
};