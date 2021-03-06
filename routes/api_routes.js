const Workout = require("../models/workout");
const express = require("express");

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

  router.put("/api/workouts/:id", (req, res) => {
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

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

router.post("/api/workouts/range", (req, res) => {
  Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({});
  Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: "$exercises.duration" } },
    },
  ])
    .sort({ day: 1 })
    .limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
