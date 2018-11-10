const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8888;
let persons = [];

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/persons', (req, res) => {
  res.send(persons);
});

app.post('/persons', (req, res) => {
  const person = { ...req.body, id: Date.now().toString() };
  persons = [...persons, person];
  return res.send(person);
});

app.get('/persons/:id', (req, res) => {
  const { id } = req.params;
  const person = persons.find(p => p.id === id);
  res.send(person);
});

app.put('/persons/:id', (req, res) => {
  const { id } = req.params;
  const person = req.body;
  persons = persons.find(p => p.id === id)
    ? persons.map(p => (p.id === id ? person : p))
    : [...persons, person];
  return res.send(person);
});

app.patch('/persons/:id', (req, res) => {
  const { id } = req.params;
  const person = req.body;
  persons = persons.map(p => (p.id === id ? { ...p, ...person } : p));
  return res.send(person);
});

app.delete('/persons/:id', (req, res) => {
  const { id } = req.params;
  persons = persons.filter(p => p.id !== id);
  res.send();
});

app.listen(port, () => {
  console.log(`app start listening on port ${port}`);
});
