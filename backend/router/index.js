const express = require("express");
const ride = require("../db");

const router = express.Router();

router.get("/api/v1/rides", (req, res) => {
  res.json(ride);
});
router.post("/api/v1/rides", (req, res) => {
  let body = req.body;
  console.log(req.body);
  let new_ride = {
    id: body.id,
    cartype: body.cartype,
    pickup: body.pickup,
    dropoff: body.dropoff
  };
  ride.push(new_ride);
  res.status(201).json(ride);
});
router.get("/api/v1/rides/:id", (req, res) => {
  for (i = 0; i <= ride.length; i++) {
    if (req.params.id == i) {
      res.json(ride[req.params.id]);
    }
  }
});
router.post("/api/v1/rides/:id/requests", (req, res) => {
  let userId = req.body.userId;
  // console.log("user id: "+userId);
  for (i = 0; i < ride.length; i++) {
    if (req.params.id == ride[i].id) {
      ride[i].user = userId;
      res.status(201).json(ride[i]);
    }
  }
});

module.exports = router;
