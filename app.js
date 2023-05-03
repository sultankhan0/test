const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/home', (req, res) => {
  return res.status(200).send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

