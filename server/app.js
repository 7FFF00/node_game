const express = require('express');
const path = require('path');
const app = express();
const port = '3000';

app.use('/', (req, res, next) => {
  console.log(`Request at ${req.url}`);
  next();
});

app.use('/', express.static(path.join(__dirname, '../client')));

app.listen(port, () => console.log(`Server ready, listening on ${port}`));