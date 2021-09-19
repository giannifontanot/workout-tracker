const router = require('express').Router();
const db = require('../../models');
const mongoose = require("mongoose");


const conn = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true})

//getLastWorkout
router.get('/', async (req, res) => {
    try {
        console.log("---> getLastWorkout");

        const dbWorkoutDATA = await db.Workout.find();
        res.json(dbWorkoutDATA);

    } catch (e) {
        res.json(e);
    }
})
// getWorkoutsInRange

router.get('/range', (req, res, next) => {
    console.log("---> getWorkoutsInRange ");
})


// addExercise
router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    let dbWorkoutDATA;
//
// const exercises = [...dbWorkout.exercises, body]
//     console.log(exercises)
//     dbWorkout.exercises = exercises;
// await dbWorkout.save();

    const {duration} = body;
    if (duration === 0) {
        dbWorkoutDATA = await db.Workout.findById(id);

    } else {
        dbWorkoutDATA = await db.Workout.findByIdAndUpdate(
            id,
            {$push: {exercises: body}},
            {new: true},
        );
    }


    console.log(dbWorkoutDATA.exercises)
    //console.log(dbWorkoutDATA);
    res.json(dbWorkoutDATA);
})
//createWorkout
router.post('/', async (req, res, next) => {
    try {
        console.log("creat empty eWorkout")
        const dbWorkoutDATA = await db.Workout.create({day: new Date()})
        res.json(dbWorkoutDATA);

    } catch (e) {
        res.json(e);
    }

})


module.exports = router;