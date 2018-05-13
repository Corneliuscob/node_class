console.log("starting async.js");


setTimeout(() =>{
    console.log("this value is delayed ");
},2000);

setTimeout(()=>{
    console.log("this value is not delayed");
},0);

console.log("Finishing up");