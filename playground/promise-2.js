var request = require('request');


var geocodeAddress= (address) =>{
    return new Promise((resolve,reject)=>{
        var domain= 'https://maps.googleapis.com/maps/api/geocode/json?address=%20'
        var query  = encodeURIComponent(address);
        var key = "&key=AIzaSyCk6RqzXbB_GG9gQEFKNNO6uYWnau12WL4"
        var location_query = domain+query+key;

        request({   
            url: location_query,
            json: true
            // url = `https://maps.googleapis.com/maps/api/geocode/json?address=%20${query}` // also works with template strings 
        },
        (error,response, body)=>{
            if (error){
                reject("An error occured. Unable to connect to google server");
            } else if (body.status === "ZERO_RESULTS"){
                reject("Unable to find that address");
            }
            
            //remember, strigify turns json into object
            if (body.status === "OK"){
                resolve({
                    Address:body.results[0].formatted_address,
                    Latitude:body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                });
                // callback(`Longitude: ${body.results[0].geometry.location.lng}`); //example of console log template string
            }
            // 
            // console.log(JSON.stringify(body,undefined,2));
            // console.log(body);
        });





    });
};

// on running geocodeAdress('someaddress number ') i expecta promise with a then callback
geocodeAddress('00000').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage);
});




