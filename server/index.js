
const path = require('path');
const express = require('express');
const {getData} = require('../database/index.js');

const app = express();

const PORT = 4002;

app.use(express.static(path.join(__dirname, '..','public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));



//gets info
app.get('/api/low-days/:id', (req, res) => {
  var query = req.params.id === 'hotel0'? 'hotel1':req.params.id;
  getData(query, (data, error)=>{
    if(error || data.rows.length === 0){
      res.status(404);
    } else {
      hotel = {
        locationId: data.rows[0].locationid,
        rooms: data.rows[0].rooms,
        name: data.rows[0].name,
        lowDays: data.rows[0].lowdays.split(',')
      }
      res.send([hotel]);
    }
  })
})

//creates info / updates info if it exists
app.post('/api/low-days/update/:name', (req, res) => {
  let name = req.params.name;
  db.update(name, req.body)
  .then(result => {
    res.send('updated');
  })
  .catch((err)=>{
    console.log(`there was an error: ${err}`)
  })
})


//deletes info
app.post('/api/delete/low-days/', (req, res) =>{
  db.deleteLocation(req.body.name)
  .then((result) => {
    res.send('file deleted')
  })
  .catch((err)=>{
    res.send(`there was an error: ${err}`)
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..','public', 'index.html'));
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});