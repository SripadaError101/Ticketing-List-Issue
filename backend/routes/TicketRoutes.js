const express = require('express');
const router = express.Router();
const Ticket = require('../model/Ticket'); 

// GET all tickets
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: "Failed to retrieve data", error: err.message });
    }
});

// POST a new ticket
router.post('/', async (req, res) => {
    try {
        const { title, description, priority, createdBy } = req.body;
        
        const newTicket = new Ticket({
            title,description,priority,createdBy,status:"Open"
        });
        const savedTicket = await newTicket.save();
        res.status(201).json(savedTicket);
    } catch (err) {
        res.status(400).json({ message: "Failed to save data", error: err.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updateinfo = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateinfo);
    } catch(err){
        res.status(400).json({ message: "Failed to update data", error: err.message });
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        await Ticket.findByIdAndDelete(req.params.id);
        res.json({message:'Ticket is Deleted'});
    }catch(error){
        res.status(400).json({error: err.message });
    }
});

module.exports = router;