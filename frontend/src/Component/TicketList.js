import React, { useEffect, useState } from "react";
import axios from 'axios';
import './TicketList.css';

function TicketList() {
    const [items, setTickets] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/tickets");
            setTickets(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    const updateTicket = async (ticketId, newstatus) => {
        try {
            await axios.patch(`http://localhost:5000/api/tickets/${ticketId}`, { status: newstatus });
            setTickets(prevTickets => prevTickets.map(item => {
                const currentId = item._id;
                return String(currentId) === String(ticketId) ? { ...item, status: newstatus } : item;
            }));
        } catch (error) {
            console.error("Error updating ticket:", error);
        }
    };

    const deleteTickets = async (ticketId) => {
        try{
            await axios.delete(`http://localhost:5000/api/tickets/${ticketId}`);
            setTickets(prevTickets => prevTickets.filter(ticket => ticket._id !== ticketId));
        }catch(error){
            alert("Error in deleting ticket.");
        }
        
    }        

    useEffect(() => {
        fetchItems();
        window.addEventListener('ticketCreated', fetchItems);
        return () => window.removeEventListener('ticketCreated', fetchItems);
    }, []);

    return (
        <div>
            {items.length === 0 ? (
                <p>No tickets found.</p>
            ) : (
                items.map(item => {
                    const ticketId = item._id;
                    return (
                        <div key={ticketId} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                            <strong>{item.title}</strong> - <small>{item.status || "No Status"}</small>
                            <p>{item.description}</p>
                            <div className="ticket_buttons">
                                <button onClick={() => updateTicket(ticketId, 'Inprogress')}>INPROGRESS</button>
                                <button onClick={() => updateTicket(ticketId, 'Resolved')}>RESOLVED</button>
                                <button className="delete-btn" onClick={() => deleteTickets(ticketId)}>DELETE</button>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default TicketList;