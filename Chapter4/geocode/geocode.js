const request = require('request');
var geocodeAddress = (address,city,callback)=>{
    request({
        url: `http://api.map.baidu.com/place/v2/suggestion?query=${encodeURIComponent(address)}&region=${encodeURIComponent(city)}&city_limit=true&output=json&ak=fRj2jV8ll3giONYp4OPZZEq080DxyWHw`,
        json: true,
    }, (error, response, body) => {
        if(error){
            callback('Unable to connnect to Baidu servers');
        }else if(body.message!=='ok'){
            callback('No result');
        }else{
            callback(undefined,{
                address:body.result[0].name,
                lat:    body.result[0].location.lat,
                lng:    body.result[0].location.lng
            });
        }
    
    });
}

module.exports={
    geocodeAddress
}