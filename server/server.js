const express = require('express');
const hbs = require('hbs');


var app = express();



app.listen(3000,()=>{
    console.log("listening on port 3000");
});
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    // res.send('<h1>Hello</h1>');
    // res.send({
    //     name: 'Toto',
    //     likes: ['cheese', 'chess']
    // });
    res.render('home.hbs', { objectproperty : 'some properties to inject into the template',
                            pageTitle: 'About Page',
                            currentYear : new Date().getFullYear(),
                            welcome_Message: 'Welcome to my rendered webpage'
                            });
})

app.get('/about',(req,res)=>{
    res.render('about.hbs', { objectproperty : 'some properties to inject into the template',
                            pageTitle: 'About Page',
                            currentYear : new Date().getFullYear()
                            });
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'Unable to handle request'
    });
});