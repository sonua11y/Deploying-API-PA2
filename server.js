const express = require('express');
require('dotenv').config(); // Load environment variables

const app = express();

// Read environment variable
const isAdmin = process.env.IS_ADMIN === 'true';

// Define a route
app.get('/', (req, res) => {
  if (isAdmin) {
    res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

// Start server
app.listen(3000, () => console.log("Server is running on port http://localhost:3000."));
