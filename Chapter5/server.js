const express = require('express');
const hbs = require('hbs');
const path = require('path');
var app = express();



// app.use(express.static(__dirname+'/public'));

// app.get('/',(req,res)=>{
//     //res.send('<h1>hello, express!</h1>');
//     res.send({
//         name:'Ken',
//         likes:[
//             'Game',
//             'Sleep'
//         ],        
//     });
// });

// app.get('/bad',(req,res)=>{
//     res.send({
//         errorMessage:"Unable to get the page"
//     })
// });

hbs.registerPartials(path.join(__dirname,'/views/partials'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        currentYear:(new Date()).getFullYear(),
    });
});

app.get('/home',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'Home Page',
        currentYear:(new Date()).getFullYear(),
        welcomeMessage:"Hello, Welcome!"
    });
});

app.listen(3000 ,()=>{
    console.log('Server is up on port 3000');
}); 