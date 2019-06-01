const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ride = [
  {
    id: 1,
    cartype: "Nissan Xterra",
    pickup: "Tabata",
    dropoff: "seedspace"
  },
  {
    id: 2,
    cartype: "Toyota IST",
    pickup: "Tabata",
    dropoff: "seedspace"
  },
  {
    id: 3,
    cartype: "Nissan Xterra",
    pickup: "Tabata",
    dropoff: "seedspace"
  },
  {
    id: 13,
    cartypen: "Harrier",
    pickup: "Posta",
    dropoff: "seedspace"
  },
  {
    id: 13,
    cartypen: "Harrier",
    pickup: "Posta",
    dropoff: "seedspace"
  }
];
app.get("/api/v1/rides", (req, res) => {
  res.json(ride);
});
app.post("/api/v1/rides", (req, res) => {
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
app.get("/api/v1/rides/:id", (req, res) => {
  for (i = 0; i <= ride.length; i++) {
    if (req.params.id == i) {
      res.json(ride[req.params.id]);
    }
  }
});
app.post("/api/v1/rides/:id/requests", (req, res) => {
  let userId = req.body.userId;
  // console.log("user id: "+userId);
  for (i = 0; i < ride.length; i++) {
    if (req.params.id == ride[i].id) {
      ride[i].user = userId;
      res.status(201).json(ride[i]);
    }
  }
});

console.log("We live ");
app.listen(port);