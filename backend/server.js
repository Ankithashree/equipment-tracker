const express = require('express');
const cors = require('cors');
const equipmentRoutes = require('./routes/equipment');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/equipment', equipmentRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Equipment Tracker API is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});