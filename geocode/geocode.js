// NPM modules
const request = require('request');


var geocodeAddress = (address) => {
    var encodedAdress = decodeURIComponent('address');
    request({
        url : `https://cloud.google.com/maps-platform/maps/apigeocode/json?address=${encodedAddress}`,
        json : true
    },(error , response , body) => {
        if(error) {
            console.log('unable to connect to google severs');
        }
        else if(body.status === 'ZERO_RESULTS'){
            console.log('unable to find the address');
        }else if(body.status === 'OK'){
            console.log(`Address : ${body.results[0].formatted_address}`);
            console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
        }    
    });
};

module.exports = {
    geocodeAddress
};