const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Mock data
const bills = require('./data/bills.json');
const mks = require('./data/mks.json');
const votes = require('./data/votes.json');

app.get('/', (req, res) => {
  res.send('Welcome to the Kenescope API');
});

app.get('/api/bills', (req, res) => {
  const { subject } = req.query;
  if (subject) {
    const filtered = bills.filter(b => b.subjects.includes(subject));
    return res.json(filtered);
  }
  res.json(bills);
});

app.get('/api/mks', (req, res) => {
  res.json(mks);
});

app.get('/api/votes', (req, res) => {
  res.json(votes);
});

app.listen(PORT, () => {
  console.log(`Kenescope API running at http://localhost:${PORT}`);
});
