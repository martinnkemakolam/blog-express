const express = require('express');
const http = require('http');
const path = require('path');

let app = express();

// configuring express is done with set
app.set('appName', 'blog app')
app.set('port', 1000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.all('*', (req, res, next)=>{
    res.render('index', {data: 'this is my app Hello world'})
})
// middleware is added with use, and should be added before defining routes, although some middleware can come after routes like error, and middlieware is where repeated code is put

http.createServer(app).listen(app.get('port'), ()=>{
    console.log(`listening on port ${app.get('port')}`);
})