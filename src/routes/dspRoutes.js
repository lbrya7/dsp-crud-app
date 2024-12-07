const express = require('express');
const router = express.Router();

// Example route for fetching all cohorts
router.get('/cohorts', (req, res) => {
    res.send('Fetching all cohorts');
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

