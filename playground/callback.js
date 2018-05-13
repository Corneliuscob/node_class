var getUser = (id,callback)=>{
    var user = {
        id:id,
        name:"Vikram"
    };  

    setTimeout(()=>{
        callback(user);
    },3000);
    
};

getUser(31,(user)=>{
  console.log(user);   
});

//https://maps.googleapis.com/maps/api/geocode/json
//https://maps.googleapis.com/maps/api/geocode/json?key=value&key2=value2

