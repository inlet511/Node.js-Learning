const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
const path = require('path');
var app = express();

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = (`${now}:${req.method} ${req.url}`);
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

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

hbs.registerPartials(path.join(__dirname, '/views/partials'));
hbs.registerHelper('getYear', () => {
    return (new Date()).getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: "Hello, Welcome!"
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});



