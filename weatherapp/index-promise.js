
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





//https://api.darksky.net/forecast/7d733e5bd11aa69652b4ea1fdc740056/42.3601,-71.0589 //sample query