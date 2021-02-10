const path = require("path");

module.exports = (app) => {
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../path/public/exercise.html"));
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../path/public/index.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../path/public/stats.html"));
  });
};