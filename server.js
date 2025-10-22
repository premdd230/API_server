const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());

// Serve static files from the 'home' folder
app.use(express.static(path.join(__dirname, 'home')));

// Default route (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home', 'index.html'));
});

app.post('/add', (req, res) => {
  console.log(req.body);
  res.send("data recevied");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});