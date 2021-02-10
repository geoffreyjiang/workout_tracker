const db = require("../models/workout");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
  
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
    });