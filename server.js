const express = require('express');
const path = require('path');
const app = express();
const PORT = 5500;

// Serve static files (css, js, images, etc.)
app.use(express.static(__dirname));

// Routes for clean URLs
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/aero', (req, res) => {
  res.sendFile(path.join(__dirname, 'aero.html'));
});

app.get('/robotics', (req, res) => {
  res.sendFile(path.join(__dirname, 'robotics.html'));
});

// Optional: 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
