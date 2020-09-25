const db = require('../database/index.js');

const express = require('express');

const app = express();

const PORT = 4002;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/trips/:id', (req, res) => {
  db.getReservationsForLocation(req.params.id)
  .then(result => {
    res.send(result);
  });
});

app.post('/api/trips/', (req, res) => {
  db.save(req.body.trip)
  .then((result => {
    res.send(result);
  }))
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});