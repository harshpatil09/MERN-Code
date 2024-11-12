// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Set the view engine to Pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', './views');

// Define a route for the root URL
app.get('/', (req, res) => {
  // Render the "index" view and pass data to it
  res.render('index', { title: 'Express Template', message: 'Express.js with template implementation!' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
