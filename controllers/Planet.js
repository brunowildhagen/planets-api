const Planet = require("../models/Planet");

exports.listAllTasks = (req, res) => {
  Planet.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(planet);
  });
};

exports.new = (req, res) => {
  let newPlanet = new Planet(req.body);
  newTask.save((err, planet) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).json(planet);
  });
};

exports.find = (req, body) => {
  Planet.findById(req.params.id, (err, planet) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(planet);
  });
};

exports.delete = (req, res) => {
  Task.remove({ _id: req.params.taskid }, (err, task) => {
    if (err) {
      return res.status(404).send(err);
    }
    return res.status(200).json({ message: "Now witness the firepower of this fully armed and operational battle station! Planeta apagado." });
  });
};