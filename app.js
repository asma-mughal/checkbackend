// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root URL
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the server!" });
  });
  
  app.get("/product", (req, res) => {
    res.status(200).json({ message: "Welcome to the product!" });
  });
  
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:8080');
});
