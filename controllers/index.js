const router = require('express').Router;
const workouts_routes = require('./api/workouts');

router.use('/workouts', workouts_routes);

module.exports =  router;