const mongoose = require('mongoose'); // Import Mongoose

// Define the schema for a Cohort document
const CohortSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Cohort name (e.g., "Cohort 1")
    year: { type: Number, required: true }, // Year the cohort started (e.g., 2021)
    members: { type: [String], default: [] } // List of member names (e.g., ["Larry", "Shaun"])
});

// Create and export the Cohort model
module.exports = mongoose.model('Cohort', CohortSchema);

