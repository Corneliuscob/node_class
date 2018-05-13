
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
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
    if(err) console.log(err);
    else console.log(JSON.stringify(res,undefined,2));
});    
