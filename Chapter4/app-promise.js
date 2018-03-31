const yargs = require('yargs');
const axios = require('axios');

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

var encodeAddress = encodeURIComponent(argv.address);
var encodeCity = encodeURIComponent(argv.city);
var geocodeUrl = `http://api.map.baidu.com/place/v2/suggestion?query=${encodeAddress}&region=${encodeCity}&city_limit=true&output=json&ak=fRj2jV8ll3giONYp4OPZZEq080DxyWHw`;


axios.get(geocodeUrl).then(
    (response)=>{
    if(response.data.message!=='ok')
    {
        throw new Error('无法查询到该地址');
    }
    var lat = response.data.result[1].location.lat;
    var lng = response.data.result[1].location.lng;
    var weatherUrl=`https://api.darksky.net/forecast/173d8f4e2d0323ceb431ed0c66211088/${lat},${lng}`;
    return axios.get(weatherUrl);
    console.log(response.data);
}).then(
    (response)=>{
        var temprature_F = response.data.currently.temperature;
        var temprature_C = (temprature_F-32)/1.8;
        console.log(`It's currently  ${temprature_C}`);
    }
).catch((e)=>{
    console.log(e);
});