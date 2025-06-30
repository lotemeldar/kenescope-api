const express = require('express');
const app = express();
const PORT = 3000;

// טוענים את קובץ ה־JSON עם ההצעות חוק
const bills = require('./data/bills.json');

app.get('/', (req, res) => {
  res.send('Welcome to the Kenescope API!');
});

// נתיב שמחזיר את רשימת ההצעות חוק
app.get('/api/bills', (req, res) => {
  const { subject } = req.query;

  if (subject) {
    const filtered = bills.filter(bill =>
      bill.subjects.includes(subject.toLowerCase())
    );
    res.json(filtered);
  } else {
    res.json(bills);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
