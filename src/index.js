const express = require('express');
const app = express();
const dspRoutes = require('./routes/dspRoutes'); // Importing the routes

app.use(express.json()); // Middleware for JSON parsing
app.use('/api/dsp', dspRoutes); // Mounting the routes under '/api/dsp'

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, DSP!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

