
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather app',
            string: true
        }
    })  
    .help()
    .alias('help','h')
    .argv;


var query  = encodeURIComponent(argv.address);


//https://api.darksky.net/forecast/7d733e5bd11aa69652b4ea1fdc740056/42.3601,-71.0589 //sample query

var domain= 'https://maps.googleapis.com/maps/api/geocode/json?address=%20'
var key = "&key=AIzaSyCk6RqzXbB_GG9gQEFKNNO6uYWnau12WL4"
var location_query = domain+query+key;


axios.get(location_query).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error("Unable to find that address");
    }
    
    
    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lng;
    var qforecast = "https://api.darksky.net/forecast/"
    var key_forecast = "7d733e5bd11aa69652b4ea1fdc740056/"
    var coord = {qlat: lat,
                qlong : long
                };
    qforecast =  qforecast+key_forecast+coord.qlat+","+coord.qlong;
    var weather_url = qforecast;


    console.log(response.data.results[0].formatted_address);
    return axios.get(weather_url);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparent_temperature = response.data.currently.apparentTemperature;

    console.log(`It's currenty ${temperature}. It feels like ${apparent_temperature}`);
}).catch((e)=>{
    if (e.code=== 'ENOTFOUND'){
        console.log("uUnable to connect to API servers.")
    }else{
        console.log(e.message);
    }
});
