# Contact Manager API

This is a backend application for a **Contact Manager**, built with **Node.js**, **Express**, and **MongoDB**. It provides a **RESTful API** to perform CRUD (Create, Read, Update, Delete) operations on contact data.

## Features

- **User Authentication:** (To be implemented)  
- **Contact Management:**
  - Get all contacts
  - Get a single contact by ID
  - Create a new contact
  - Update an existing contact
  - Delete a contact
- **Modular Routing:** Routes are organized into separate files for better maintainability.
- **Environment Variables:** Configuration is handled securely using `.env` files.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher)  
- **npm** (Node Package Manager)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the repository

```bash
git clone <repository_url>
cd contact-manager-api
2. Install dependencies
bash
Copy code
npm install
This will install all the necessary packages listed in package.json, including express and mongoose.

3. Set up environment variables
Create a .env file in the root directory of the project and add the following:

env
Copy code
PORT=5000
MONGODB_URI=<your_mongodb_connection_string>
Replace <your_mongodb_connection_string> with your actual MongoDB connection string (from MongoDB Atlas or your local MongoDB server).

4. Run the application
bash
Copy code
npm start
The server will start on the port specified in your .env file, e.g., http://localhost:5000.

API Endpoints
Once the server is running, you can test the API endpoints using Postman, Insomnia, or any API testing tool.

Method	Endpoint	Description
GET	/api/contacts	Retrieves a list of all contacts
GET	/api/contacts/:id	Retrieves a single contact by ID
POST	/api/contacts	Creates a new contact
PUT	/api/contacts/:id	Updates a contact by ID
DELETE	/api/contacts/:id	Deletes a contact by ID

Folder Structure
bash
Copy code
.
├── node_modules/         # Project dependencies
├── routes/
│   └── contactRoutes.js  # Contact API routes
├── .env                  # Environment variables
├── package.json          # Project metadata
├── server.js             # Main server file
└── README.md             # Project README