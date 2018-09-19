const express = require('express');
const db = require('../database/database.js')
const app = express();
const port = process.env.PORT || 3004;

app.use('/public/:id', express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

app.get('/house/:id', (req, res) => {
  db.House.sync().then(()=> {
    return db.House.findAll()
  }).then((data)=>{
    for (var i = 0; i < data.length; i++) {
      if (data[i].house_id === Number(req.params.id)) {
        res.send(data[i]);
        return;
      }
    }
  })
})

// app.get('/calendar/:id', (req, res) => {
//   console.log(db.Calendar.findAll())
//   // db.Calendar.sync().then(()=> {
//   //   return db.Calendar.findAll()
//   // }).then((data)=>{
//   //   console.log(data);
//   // })
// });

// app.post('', (req, res) => {

// });

app.listen(port, () => {
  'Currently listening on port 3004';
});