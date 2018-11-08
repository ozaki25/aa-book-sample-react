const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8888;
const persons = [];

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/persons', (req, res) => {
  console.log(persons);
  res.send(persons);
});

app.post('/persons', (req, res) => {
  const person = req.body;
  console.log(person);
  persons.push(person);
  return res.send(person);
});

app.listen(port, () => {
  console.log(`app start listening on port ${port}`);
});
