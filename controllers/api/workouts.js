/**
 * Dynamic routes that reads data from MongoDB
 * @type {Router}
 */
const router = require('express').Router();
const db = require('../../models');
const mongoose = require("mongoose");
const connection = require("../../connection")

// MongoDB connection
const conn = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true})

// getLastWorkout
// gets data according to the ID read from browser URL
router.get('/', async (req, res) => {
    try {
        //Aggregate totalDuration
        const resAggregate = await db.Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }]);

        res.json(resAggregate);

    } catch (e) {
        res.json(e);
    }
})

// getWorkoutsInRange
// Reads workouts and AGGREGATES the Total Duration of the exercises
router.get('/range', async (req, res, next) => {

    // Aggregates the Total Duration
    // Sorts by Date
    // Sends the last 7 documents
    const resAggregate = await db.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).sort({day: -1}).limit(7);

    res.json(resAggregate);
})


// addExercise
// Adds one exercise to a Workout identified by the ID in the URL
router.put('/:id', async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    let dbWorkoutDATA;

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

    res.json(dbWorkoutDATA);
})
// createWorkout
// Creates an empty workout to be filled with exercises.
router.post('/', async (req, res, next) => {
    try {
        const dbWorkoutDATA = await db.Workout.create({day: new Date()})
        res.json(dbWorkoutDATA);

    } catch (e) {
        res.json(e);
    }
})


module.exports = router;