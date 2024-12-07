const express = require('express');
const router = express.Router();
const Cohort = require('../models/Cohort'); // Import the Cohort model

// GET all cohorts
router.get('/cohorts', async (req, res) => {
    try {
        const cohorts = await Cohort.find(); // Fetch all documents in the cohorts collection
        res.json(cohorts); // Respond with the data in JSON format
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cohorts', error });
    }
});

// Example route for creating a new cohort
router.post('/cohorts', (req, res) => {
    res.send('Creating a new cohort');
});

// Example route for updating a cohort
router.put('/cohorts/:id', (req, res) => {
    res.send(`Updating cohort with ID ${req.params.id}`);
});

// Example route for deleting a cohort
router.delete('/cohorts/:id', (req, res) => {
    res.send(`Deleting cohort with ID ${req.params.id}`);
});

module.exports = router;

