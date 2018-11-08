const express = require('express');

const port = process.env.PORT || 8888;
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => {
  console.log(`app start listening on port ${port}`);
});
