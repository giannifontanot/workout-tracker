// let config = require('../config');
let mongoose = require('mongoose')
const root = require('app-root-path');
const path = require('path');
require('dotenv').config({path: root + path.sep + ".env"});
let connection;



module.exports = connection = () => {
    const db = mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
        reconnectInterval: 5000,
        reconnectTries: 60,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    db.on(`error`, console.error.bind(console, `connection error:`));
    db.once(`open`, function () {
        // we`re connected!
        console.log("MongoDB connected!");
    });
};


