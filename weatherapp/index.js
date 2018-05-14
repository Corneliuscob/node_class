
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather app',
//             string: true
//         }
//     })  
//     .help()
//     .alias()
//     .argv;
// console.log(argv.address);

// geocode.geocodeAddress(argv.address,(err,res)=>{
//     if(err) console.log(err);
//     else console.log(JSON.stringify(res,undefined,2));
// });    

const request = require('request');

var qforecast = "https://api.darksky.net/forecast/"
var key_forecast = "7d733e5bd11aa69652b4ea1fdc740056/"
var coord = {lat: 42.3601,
            long : -71.0589
            };
qforecast =  qforecast+key_forecast+coord.lat+","+coord.long;

console.log(qforecast);


request({   
    url: qforecast,
    json: true
    // url = `https://maps.googleapis.com/maps/api/geocode/json?address=%20${query}` // also works with template strings 
},
(error,response, body)=>{
    if (error){
        // callback("An error occured. Unable to connect to forecast.io");
        console.log("An error occured. Unable to connect to forecast.io");
    } 
    else console.log(body.currently.temperature);
    
    //remember, strigify turns json into object
        //callback(undefined,{
            // Address:body.results[0].formatted_address,
            // Latitude:body.results[0].geometry.location.lat,
            // Longitude: body.results[0].geometry.location.lng
        // callback(`Longitude: ${body.results[0].geometry.location.lng}`); //example of console log template string
        //}
        
    // 
    // console.log(JSON.stringify(body,undefined,2));
    // console.log(body);
});

//https://api.darksky.net/forecast/7d733e5bd11aa69652b4ea1fdc740056/42.3601,-71.0589 //sample query