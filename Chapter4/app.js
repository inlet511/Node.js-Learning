const request = require('request');
const yargs = require('yargs');
const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


request({
    url: `http://api.map.baidu.com/place/v2/suggestion?query=${encodeURIComponent(argv.address)}&region=%E5%8C%97%E4%BA%AC&city_limit=true&output=json&ak=fRj2jV8ll3giONYp4OPZZEq080DxyWHw`,
    json: true,
}, (error, response, body) => {
    if(error){
        console.log('Unable to connnect to Baidu servers');
    }else if(body.status===0){
        console.log('No result.');
    }else{
        body.result.forEach((item) => {
            try{
                console.log("-----------");
                console.log(`地点名称：${item.name}`);
                console.log(`经度：${item.location.lat}`);
                console.log(`维度：${item.location.lng}`);
            }catch(e)
            {
    
            }
        });
    }

});