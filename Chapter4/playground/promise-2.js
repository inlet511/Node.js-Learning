const request = require('request');

var geocodeAddress = (address,city) => {
    return new Promise((resolve, reject) => {
        request({
                url: `http://api.map.baidu.com/place/v2/suggestion?query=${encodeURIComponent(address)}&region=${encodeURIComponent(city)}&city_limit=true&output=json&ak=fRj2jV8ll3giONYp4OPZZEq080DxyWHw`,
                json: true
            },
            (error, response, body) => {
                if (error || body.message !== 'ok') {
                    reject("Can't Locate the place");
                } else {
                    resolve({
                        address: body.result[1].name,
                        lat: body.result[1].location.lat,
                        lng: body.result[1].location.lng
                    });
                }
            }
        );
    })
};

geocodeAddress('图书馆','武汉').then(
    (location) => {
        console.log(JSON.stringify(location, undefined, 2));
    }, (errorMessage) => {
        console.log(errorMessage);
    });