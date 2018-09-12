const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = decodeURIComponent('address');
    return new Promise((resolve , reject) => {
        request({
            url : `https://cloud.google.com/maps-platform/maps/apigeocode/json?address=${encodedAddress}`,
            json : true
        },(error , response , body) => {
            if(error) {
               reject('Unable to connect to google servers');
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('unable to find the address');
            }
            else if(body.status === 'OK'){
                resolve({
                    address : body.results[0].formatted_address,
                    lat : body.results[0].geometry.location.lat,
                    long : body.results[0].geometry.location.lng
                });
            }    
        });
    });
};

geocodeAddress("122001").then((location) => {
    console.log(JSON.stringify(location , undefined , 2 ));
},(errorMsg) => {
    console.log(errorMsg);
});
