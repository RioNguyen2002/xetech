const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Định nghĩa một endpoint API ví dụ
app.get('/api/example', (req, res) => {
  res.json({ message: 'This is an example API endpoint.' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

