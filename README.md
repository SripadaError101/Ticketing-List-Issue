Ticketing List

A full-stack ticket management app. Users can create tickets with a priority, view all tickets, update their status, and delete them.

Tech Stack
Frontend: React, Axios
Backend: Node.js, Express, Mongoose
Database: MongoDB
Project Structure

ticketinglist/

├── frontend/   # React app

└── backend/    # Express API

    ├── server.js
    
    ├── model/Ticket.js
    
    └── routes/TicketRoutes.js

Prerequisites
Node.js
MongoDB running locally on mongodb://localhost:27017
Getting Started

Clone the repository:

bash
git clone https://github.com/SripadaError101/ticketinglist.git
cd ticketinglist

Start the backend (runs on port 5000):

bash
cd backend
npm install
node server.js

Start the frontend (in a second terminal):

bash
cd frontend
npm install
npm start

The app opens at http://localhost:3000. The backend connects to the Ticketingissues database, which MongoDB creates automatically on first use.

API

Base URL: http://localhost:5000/api/tickets

Method	Endpoint	Description
GET	/	Get all tickets
POST	/	Create a ticket
PATCH	/:id	Update a ticket (e.g. status)
DELETE	/:id	Delete a ticket
Ticket Model
Field	Type	Default
title	String	
description	String	
createdBy	String	
priority	String (Low, Medium, High)	Low
status	String	Open
createdAt	Date	Now
