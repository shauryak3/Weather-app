//NPM modules
const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

var encodedAddress = decodeURIComponent('address');
var geocodeURL = `https://cloud.google.com/maps-platform/maps/apigeocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('address not found');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.long;
    var weatherURL =`https://api.darksky.net/forecast/beb95027f90455ecd01a921c54fe56b0/${lat},${long}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then(() => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`currently : ${temperature} but feels like ${apparentTemperature}`);
}).catch((error) => {
    if(error.code === 'ENOTFOUND'){
        console.log('unable to connect to API servers');
    }else{
        console.log(error.message);
    }
});
