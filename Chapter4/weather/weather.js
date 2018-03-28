const request = require('request');

var retriveWeatherInfo = (lat,lng,callback) => {
    request({
            url: `https://api.darksky.net/forecast/173d8f4e2d0323ceb431ed0c66211088/${lat},${lng}`,
            json: true
        },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                callback(body.currently.temperature)
            } else {
                console.log('Unable to fetch weather');
            }
        });
}

module.exports.retriveWeatherInfo = retriveWeatherInfo;