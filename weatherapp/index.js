const request = require('request');

request({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%203382%20cambie%20street%20vancouver&key=AIzaSyCk6RqzXbB_GG9gQEFKNNO6uYWnau12WL4',
            json: true
        },
        (error,response, body)=>{
            //remember, strigify turns json into object
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            // console.log(JSON.stringify(body,undefined,2));
            // console.log(body);
        });