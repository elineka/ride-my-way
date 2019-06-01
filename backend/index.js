const express = require("express");
const app = express();
const port = 4000;

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
    cartypen: "Nissan Xterra",
    pickup: "Tabata",
    dropoff: "seedspace"
  }
];
app.get("/api/v1/rides", (req, res) => {
  res.json(ride);
});
app.post("/api/v1/rides",  (req, res) => {
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
    }
  ];
  res.json(ride);
});
app.get(
  "/api/v1/rides/:id", (req, res) => {
    res.json(ride);
  },
  function(req, res, next) {
    // send a regular response
    res.send("regular");
  }
);
app.post("/api/v1/rides/:id", (req, res) => {
  res.status(200).json({ message: "Request recieved" });
});

console.log("We live ");
app.listen(port);
