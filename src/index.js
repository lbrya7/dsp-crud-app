const express = require('express'); // Import Express for building the server
const mongoose = require('mongoose'); // Import Mongoose for interacting with MongoDB
const dspRoutes = require('./routes/dspRoutes'); // Import DSP routes
require('dotenv').config(); // Load environment variables from the .env file

const app = express(); // Create an Express application
app.use(express.json()); // Middleware to parse incoming JSON requests

// Connect to MongoDB using the URI from the environment variables
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB')) // Log success if connection is established
    .catch((err) => console.error('MongoDB connection error:', err)); // Log error if connection fails

// Use the DSP routes for any path starting with /api/dsp
app.use('/api/dsp', dspRoutes);

// Basic route for testing the server
app.get('/', (req, res) => {
    res.send('Hello, DSP!'); // Respond with a simple message
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the server startup
});

