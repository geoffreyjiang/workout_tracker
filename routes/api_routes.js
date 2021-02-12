const db = require("../models/workout");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  Workout.find({});
  Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: "$exercises.duration" } },
    },
  ])
    .sort({ day: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
