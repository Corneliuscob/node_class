const request = require('request');


var getWeather= (lat,long,callback) =>{

var qforecast = "https://api.darksky.net/forecast/"
var key_forecast = "7d733e5bd11aa69652b4ea1fdc740056/"
var coord = {qlat: lat,
            qlong : long
            };
qforecast =  qforecast+key_forecast+coord.qlat+","+coord.qlong;

// console.log(qforecast);


request({   
    url: qforecast,
    json: true
    // url = `https://maps.googleapis.com/maps/api/geocode/json?address=%20${query}` // also works with template strings 
},
(error,response, body)=>{
    console.log(`Status Code: ${response.statusCode}`);
    if (error){
        callback("An error occured. Unable to connect to forecast.io");
        // console.log("An error occured. Unable to connect to forecast.io");
    } 
    else if (response.statusCode === 403){
        // console.log("Bad Gateway");
        callback("Bad Gateway");
    }
    else if (response.statusCode === 400){
        // console.log("Unable to find location");
        callback("Unable to find Location");
    }
    else callback(undefined,{ temperature: body.currently.temperature,
                              apparentTemperature: body.currently.apparentTemperature});

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
}
module.exports = {getWeather: getWeather};



//https://api.darksky.net/forecast/7d733e5bd11aa69652b4ea1fdc740056/42.3601,-71.0589 //sample query