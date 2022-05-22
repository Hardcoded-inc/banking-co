const express = require("express");
const { Coffee } = require("../models");

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Coffee.findOne({ _id: id }, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
});

router.get("/", (req, res) => {
  Coffee.find({}, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
});

router.post("/", (req, res) => {
  const newCoffee = new Coffee(req.body);

  newCoffee.save((err, coffee) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(coffee);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Coffee.findByIdAndRemove(id, (err, coffee) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(coffee);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Coffee.findByIdAndUpdate(id, req.body, { new: true }, (err, coffee) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(coffee);
  });
});

module.exports = router;
