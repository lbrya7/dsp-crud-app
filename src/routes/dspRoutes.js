const express = require('express');
const router = express.Router();
const Cohort = require('../models/Cohort'); // Import the Cohort model

// GET all cohorts
// Fetches all cohort records from the database and returns them in JSON format
router.get('/cohorts', async (req, res) => {
    try {
        const cohorts = await Cohort.find(); // Fetch all documents in the "cohorts" collection
        res.json(cohorts); // Send the data as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cohorts', error }); // Send error response if something goes wrong
    }
});

// POST a new cohort
// Creates a new cohort record in the database based on the request body
router.post('/cohorts', async (req, res) => {
    const { name, year, members } = req.body; // Extract data from the request body
    try {
        const newCohort = new Cohort({ name, year, members }); // Create a new cohort object
        const savedCohort = await newCohort.save(); // Save the cohort to the database
        res.status(201).json(savedCohort); // Respond with the saved cohort
    } catch (error) {
        res.status(500).json({ message: 'Error creating cohort', error }); // Send error response if something goes wrong
    }
});

// PUT update a cohort
// Updates an existing cohort's details based on its ID
router.put('/cohorts/:id', async (req, res) => {
    const { id } = req.params; // Get the cohort ID from the request parameters
    const { name, year, members } = req.body; // Extract data from the request body
    try {
        const updatedCohort = await Cohort.findByIdAndUpdate(
            id, // ID of the cohort to update
            { name, year, members }, // New data for the cohort
            { new: true } // Return the updated document
        );
        if (!updatedCohort) {
            return res.status(404).json({ message: 'Cohort not found' }); // If no cohort is found, send a 404 error
        }
        res.json(updatedCohort); // Respond with the updated cohort
    } catch (error) {
        res.status(500).json({ message: 'Error updating cohort', error }); // Send error response if something goes wrong
    }
});

// DELETE a cohort
// Deletes a cohort record based on its ID
router.delete('/cohorts/:id', async (req, res) => {
    const { id } = req.params; // Get the cohort ID from the request parameters
    try {
        const deletedCohort = await Cohort.findByIdAndDelete(id); // Delete the cohort by ID
        if (!deletedCohort) {
            return res.status(404).json({ message: 'Cohort not found' }); // If no cohort is found, send a 404 error
        }
        res.json({ message: 'Cohort deleted successfully', deletedCohort }); // Respond with a success message
    } catch (error) {
        res.status(500).json({ message: 'Error deleting cohort', error }); // Send error response if something goes wrong
    }
});

module.exports = router; // Export the router so it can be used in other files

