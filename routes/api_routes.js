const db = require("../models/workout");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  Workout.find({});
  Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: "$exercises.duration" } },
    },
  ])
    .sort({ day: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });

  router.post("/api/workouts", (req, res) => {
    Workout.create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({});
    Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ])
      .sort({ day: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {
    console.log("Params", req.body, req.params);

    Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
});
