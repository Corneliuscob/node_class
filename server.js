const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

const port= process.env.PORT || 3000;



hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');

app.use((req,res,next)=>{
    var log = new Date().toString();
    console.log(`${log}: ${req.method} ${req.url}`);
    fs.appendFile('server.log',log + '\n',(err)=>{
        if (err){
            console.log('Unable to appened to the server.log');
        }
    })

    next();
});
    // on instances where  we dont want to continue we would never print the next()
    // an example used is if hte site is under maintenance 
app.use((req,res,next)=>{
    var mflag = false;
    if(mflag){
        res.render('maintenance.hbs');
    }
    else{
        next();
    }
});

app.use(express.static(__dirname + '/public'));
//express middleware


// helpers are functions we can pass into handle bars; this helper is passed into footer.hbs
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
});

// helpers can also take in arguments. This is very useful; this helper turns any string into upper case
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});


app.get('/',(req,res)=>{
    // res.send('<h1>Hello</h1>');
    // res.send({
    //     name: 'Toto',
    //     likes: ['cheese', 'chess']
    // });
    res.render('home.hbs', { objectproperty : 'some properties to inject into the template',
                            pageTitle: 'Home Page',
                            welcome_Message: 'Welcome to my rendered webpage'
                            });
})

app.get('/about',(req,res)=>{
    res.render('about.hbs', { objectproperty : 'some properties to inject into the template',
                            pageTitle: 'About Page',
                            });
});
app.get('/help',(req,res)=>{
    res.render('help.hbs', { objectproperty : 'some properties to inject into the template',
                            pageTitle: 'Help Page',
                            });
});
app.get('/projects',(req,res)=>{
    res.render('help.hbs', { objectproperty : 'some properties to inject into the template',
                            pageTitle: 'Projects',
                            });
});


app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
// app.listen(3000,()=>{
//     console.log("listening on port 3000");
// });

//heroku will set us  a port to listen on 
app.listen(port,()=>{
        console.log(`listening on port ${port}`);
});