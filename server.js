// Import the Express module
const express = require('express');

// Initialize an Express application
const app = express();

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
