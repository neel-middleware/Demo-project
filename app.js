// Simple Express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Demo Node.js App!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
