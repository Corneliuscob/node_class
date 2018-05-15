
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');
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
    .alias()
    .argv;
console.log(argv.address);

geocode.geocodeAddress(argv.address,(err,res)=>{
    if (err) {
            console.log(err);
    }
    else {
        console.log(res.Address);
        weather.getWeather(res.Latitude,res.Longitude,(err,wres)=>{
            if(err) console.log(err);
            else console.log(`It's currently ${wres.temperature}. It feels like ${wres.apparentTemperature}`);
        });
    }
});    




//https://api.darksky.net/forecast/7d733e5bd11aa69652b4ea1fdc740056/42.3601,-71.0589 //sample query