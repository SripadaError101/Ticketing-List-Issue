import React, { useState } from 'react';
import axios from 'axios';
import './TicketForm.css';

function TicketForm(){
    const [form, setForm] = useState({
        title: '',
        description: '',
        priority: '',
        createdBy: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/tickets', form);
            alert("Ticket Created");
            setForm({ title: '', description: '', priority: '', createdBy: '' });
            window.dispatchEvent(new Event('ticketCreated'));
        } catch (error) {
            alert("Error in creating ticket. Please try again");
            console.error(error);
        }
    };

    return (
        <div className="ticket-form">
            <h2>Ticket Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' name='title' value={form.title} onChange={handleChange} required />
                    
                    <label htmlFor='description'>Description:</label>
                    <input type='text' id='description' name='description' value={form.description} onChange={handleChange} required />

                    <label htmlFor='priority'>Priority</label>
                    <select name='priority' value={form.priority} onChange={handleChange} required>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <label htmlFor='createdBy'>createdBy(your name):</label>
                    <input type='text' id='createdBy' name='createdBy' value={form.createdBy} onChange={handleChange} required /><br></br>

                    <button type='submit' className='submit-btn'>CREATE TICKET</button>
                </div>
            </form>
        </div>
    );
}
export default TicketForm;