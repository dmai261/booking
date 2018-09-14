const express = require('express');
const db = require('../database/database.js')
const app = express();
const port = process.env.PORT || 3004;

app.use('/public/:id', express.static('public'));

app.get('/house/:id', (req, res) => {

  db.House.sync().then(()=> {
    return db.House.findAll()
  }).then((data)=>{
    console.log(JSON.parse(JSON.stringify(data)));
    for (var i = 0; i < data.length; i++) {
      if (data[i].house_id === Number(req.params.id)) {
        res.send(data[i]);
        return;
      }
    }
  })
})

app.get('', (req, res) => {
  res.send('woohoo')
});

app.post('', (req, res) => {

});

app.listen(port, () => {
  'Currently listening on port 3004';
});