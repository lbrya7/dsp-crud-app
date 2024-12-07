const mongoose = require('mongoose');

// Define the Cohort schema
const CohortSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    members: { type: [String], required: true },
});

// Create the Cohort model
const Cohort = mongoose.model('Cohort', CohortSchema);

module.exports = Cohort;

