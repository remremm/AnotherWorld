const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();
const PORT = 3005;

app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/storyLine', (req, res) => {
  db.query('SELECT * FROM storyline WHERE id = 1', (err, results) => {
    if(err){
      console.log(err);
    }else{
      res.json(results.rows);
    }
  })
});

app.get('/storyLine/:id', (req, res) => {
  let {id} = req.params;
  db.query(`SELECT * FROM storyline WHERE id = ${id}`, (err, results) => {
    if(err){
      console.log(err);
    }else{
      res.json(results.rows);
    }
  })
})

app.get('/charinfo', (req, res) => {
  db.query(`SELECT * FROM charinfo`, (err, results) => {
    if(err){
      console.log(err);
    }else{
      res.json(results.rows);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});