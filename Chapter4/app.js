const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        },
        c: {
            demand: true,
            alias: 'city',
            describe: 'Search in city',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, argv.city, (error, result) => {
    if (error) {
        consol.log(error);
    } else {
        console.log(JSON.stringify(result,undefined,2));
        weather.retriveWeatherInfo(result.lat, result.lng, (temp) => {
            console.log(result.address, " temprature is :", temp);
        });
    }
});