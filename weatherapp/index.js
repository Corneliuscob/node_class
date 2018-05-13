const request = require('request');
const yargs = require('yargs');

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
var domain= 'https://maps.googleapis.com/maps/api/geocode/json?address=%20'
var query  = encodeURIComponent(argv.address);
var location_query = domain+query;


request({
            url: location_query,
            json: true
            // url = `https://maps.googleapis.com/maps/api/geocode/json?address=%20${query}` // also works with template strings 
        },
        (error,response, body)=>{
            //remember, strigify turns json into object
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            // console.log(JSON.stringify(body,undefined,2));
            // console.log(body);
        });