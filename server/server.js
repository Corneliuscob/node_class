const express = require('express');
app.listen(3000,()=>{
    console.log("listening on port 3000");
});

var app = express();


app.get('/',(req,res)=>{
    // res.send('<h1>Hello</h1>');
    res.send({
        name: 'Toto',
        likes: ['cheese', 'chess']
    });
})

app.get('/about',(req,res)=>{
    res.send('About page');
});

app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'Unable to handle request'
    });
});