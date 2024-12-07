const express = require('express');
const mongoose = require('mongoose');
const dspRoutes = require('./routes/dspRoutes');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/dsp', dspRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, DSP!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

