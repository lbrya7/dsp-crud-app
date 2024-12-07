DSP CRUD App
Project Overview
The DSP CRUD App is a web application designed for students in the DuSable Scholars Program (DSP) at UIC. Its primary purpose is to manage cohorts, allowing for seamless communication and collaboration between program members. This app serves as a foundational tool for future expansion, aiming to enhance the DSP community's engagement and organization.

Setup Instructions
Prerequisites
Node.js (v16 or higher)
MongoDB (locally installed or cloud-based, e.g., MongoDB Atlas)
npm (comes with Node.js)
Installation
Clone this repository to your local machine:
bash
Copy code
git clone git@github.com:your-username/dsp-crud-app.git
cd dsp-crud-app


Install dependencies:
bash
Copy code
npm install


Create a .env file in the root directory with the following content:
env
Copy code
MONGO_URI=mongodb://127.0.0.1:27017/dspApp


Start the MongoDB service locally:
bash
Copy code
mongod


Start the application:
bash
Copy code
node src/index.js


Open your browser or Postman and test the app at http://localhost:3000.

API Documentation
Base URL
http://localhost:3000/api/dsp
Endpoints
GET /cohorts
Description: Fetch all cohorts.
Response:
Empty database: []
Example with data:
json
Copy code
[
  {
    "_id": "6753e2c32f2c0c729b67f744",
    "name": "Cohort 1",
    "year": 2021,
    "members": ["Larry", "Shaun", "Malik"]
  }
]


POST /cohorts
Description: Create a new cohort.
Request Body:
json
Copy code
{
  "name": "Cohort 2",
  "year": 2023,
  "members": ["Alice", "Bob", "Charlie"]
}


Response:
json
Copy code
{
  "_id": "675402fee676355bb27f3e29",
  "name": "Cohort 2",
  "year": 2023,
  "members": ["Alice", "Bob", "Charlie"]
}


PUT /cohorts/:id
Description: Update an existing cohort by ID.
Request URL: /cohorts/<id>
Request Body:
json
Copy code
{
  "name": "Updated Cohort Name",
  "year": 2024,
  "members": ["New Member 1", "New Member 2"]
}


Response (successful update):
json
Copy code
{
  "_id": "675402fee676355bb27f3e29",
  "name": "Updated Cohort Name",
  "year": 2024,
  "members": ["New Member 1", "New Member 2"]
}


DELETE /cohorts/:id
Description: Delete a cohort by ID.
Request URL: /cohorts/<id>
Response (successful deletion):
json
Copy code
{
  "message": "Cohort deleted successfully",
  "deletedCohort": {
    "_id": "675402fee676355bb27f3e29",
    "name": "Updated Cohort Name",
    "year": 2024,
    "members": ["New Member 1", "New Member 2"]
  }
}



Testing Instructions
Using Postman:
Open Postman and create a new collection for the DSP CRUD App.
Add requests for each endpoint:
GET: http://localhost:3000/api/dsp/cohorts
POST: http://localhost:3000/api/dsp/cohorts
PUT: http://localhost:3000/api/dsp/cohorts/:id
DELETE: http://localhost:3000/api/dsp/cohorts/:id
Test with the appropriate HTTP methods and data payloads.
Expected Results:
GET: Lists all cohorts or an empty array.
POST: Adds a new cohort and returns its details.
PUT: Updates the specified cohort and returns the updated data.
DELETE: Removes the specified cohort and confirms the deletion.


