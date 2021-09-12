const express = require('express');
const dotenv = require('dotenv');
const root = require('app-root-path');
const PORT = process.env.PORT || 3000;
const app = express();
const router = require('./controllers')


// WHERE IS THE ROUTER
app.use(router);

// STATIC FILE LOCATION
app.use('/public',express.static('public'));

//TO READ JSON POST
app.use(express.json());

// TO READ FORM-DATA
app.use(express.urlencoded({}));

// SERVER STARTS
app.listen(PORT, ()=>{
    console.log('Server listening on port %J', PORT);
});