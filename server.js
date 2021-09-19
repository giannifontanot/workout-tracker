const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const root = require('app-root-path');
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require('./controllers')


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});


// STATIC FILE LOCATION
app.use('/',express.static('public'));

//TO READ JSON POST
app.use(express.json());

// TO READ FORM-DATA
app.use(express.urlencoded({extended:true}));

// WHERE IS THE ROUTER
app.use(routes);

// SERVER STARTS
app.listen(PORT, ()=>{
    console.log('Server listening on port %j', PORT);
});