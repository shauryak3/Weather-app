//NPM modules
const yargs = require('yargs');

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

geocode.geocodeAddress(argv.address,(errorMessage , results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.lat , results.long , (errorMessage , weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(`its currently ${weatherResults.temperature} but feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});

