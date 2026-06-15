const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
//intialize the express application
const app=express();
//activate cors middleware
app.use(cors());
app.use(express.json());
//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/ticketDB').then(()=>console.log("Database /MongoDB connected")).catch(err=>console.log(err));
//Use routes
const ticketRoute=require('./routes/TicketRoutes');
app.use('/api/tickets',ticketRoute);
app.listen(5000,()=>console.log("Server is running onn port 5000"));
