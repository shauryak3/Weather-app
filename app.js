//NPM modules
const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a : {
            demand : true,
            alias : 'address',
            describe : 'give your address to fetch weatherfor',
            string : true
        }
    })
    .help()
    .argv;

let encodedAddress = decodeURIComponent('argv.address');

request({
    url : `https://maps.googleapis.com/maps/apigeocode/json?address=${encodedAddress}`,
    json : true
},(error , response , body) => {
    console.log(`Address : ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);    
});