import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;
const dbFilePath = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// Utility function to read database
const readDatabase = (): any => {
  const data = fs.readFileSync(dbFilePath, 'utf8');
  return JSON.parse(data);
};

// Utility function to write to database
const writeDatabase = (data: any): void => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

// /ping endpoint
app.get('/ping', (req, res) => {
  res.json({ success: true });
});

// /submit endpoint
app.post('/submit', (req, res) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newSubmission = { name, email, phone, github_link, stopwatch_time };
  const db = readDatabase();
  db.submissions.push(newSubmission);
  writeDatabase(db);

  res.status(201).json({ success: true });
});

// /read endpoint
app.get('/read', (req, res) => {
  const { index } = req.query;
  const db = readDatabase();

  if (!index || isNaN(Number(index)) || Number(index) < 0 || Number(index) >= db.submissions.length) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  const submission = db.submissions[Number(index)];
  res.json(submission);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
