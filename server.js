const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Kenescope API!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
