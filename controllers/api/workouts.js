const router = require('express').Router();
const db = require('../../models');
const mongoose = require("mongoose");


const conn = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true})

//getLastWorkout
router.get('/', async (req, res) => {
    try {
        console.log("---> get");

        const dbWorkoutDATA = await db.Workout.find();
        res.json(dbWorkoutDATA);

    } catch (e) {
        res.json(e);
    }
})
//getWorkoutsInRange
router.get('/range', (req, res, next) => {
})


//addExercise
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    console.log("---> id :" + (id));
    const {body} = req.body;
    const  dbWorkoutDATA  = db.Workout.findOneAndUpdate(
        {id: id},
        {$push: {exercise: body}},
        {new: false},
    );

         console.log("---> dbWorkoutDATA :" +(dbWorkoutDATA) );
})
//createWorkout
router.post('/', (req, res, next) => {
})


module.exports = router;