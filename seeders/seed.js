const root = require('app-root-path');
const path = require('path');
require('dotenv').config({path: root + path.sep + ".env"});
const db = require('../models');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});


const workoutSeed = [
    {
        day: new Date(new Date().setDate(new Date().getDate() - 9)),
        exercises: [
            {
                type: 'resistance',
                name: 'Bicep Curl',
                duration: 20,
                weight: 110,
                reps: 10,
                sets: 4,
            },
        ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 8)),
        exercises: [
            {
                type: 'resistance',
                name: 'Lateral Pull',
                duration: 20,
                weight: 80,
                reps: 10,
                sets: 4,
            },
        ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 7)),
        exercises: [
            {
                type: 'resistance',
                name: 'Push Press',
                duration: 25,
                weight: 185,
                reps: 8,
                sets: 4,
            },
        ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 6)),
        exercises: [
            {
                type: 'cardio',
                name: 'Running',
                duration: 25,
                distance: 4,
            },
            {
                type: 'resistance',
                name: 'Bench Press',
                duration: 20,
                weight: 285,
                reps: 10,
                sets: 4,
            },
        ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 5)),
        exercises: [
            {
                type: 'resistance',
                name: 'Bench Press',
                duration: 20,
                weight: 85,
                reps: 10,
                sets: 4,
            },
        ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 4)),
        exercises: [
            {
                type: 'resistance',
                name: 'Bench Press',
                duration: 20,
                weight: 80,
                reps: 10,
                sets: 4,
            },
        ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 3)),
        exercises: [
            {
                type: 'resistance',
                name: 'Quad Press',
                duration: 30,
                weight: 50,
                reps: 10,
                sets: 4,
            },
        ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 2)),
        exercises: [
            {
                type: 'resistance',
                name: 'Bench Press',
                duration: 20,
                weight: 180,
                reps: 10,
                sets: 4,
            },
        ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 1)),
        exercises: [
            {
                type: 'resistance',
                name: 'Military Press',
                duration: 20,
                weight: 150,
                reps: 10,
                sets: 4,
            },
        ],
    },
];

db.Workout.deleteMany({})
    .then(() => db.Workout.collection.insertMany(workoutSeed))
    .then((data) => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
