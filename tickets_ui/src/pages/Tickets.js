/*
Tickets.js
The main view that renders the active tickets
*/

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TicketList from '../components/TicketList';
import './css/Tickets.css';

function Tickets() {
    const [tickets, setTickets] = useState([]);

    const onComplete = async _id => {
        // confirm their choice
        const choice = window.confirm("Are you sure you want to complete this ticket?");

        if (choice){
            const response = await fetch(`/api/tickets/toggle_active/${_id}`, {method: 'PUT'});
        
            if (response.status === 200) {
                const newTickets = tickets.filter(e => e._id !== _id);
                setTickets(newTickets);
            } else {
                console.log(`Failed to toggle active status for ticket with id= ${_id}, 
                status code = ${response.status}`);
            }
        }
    }   

    const loadTickets = async () => {
        const response = await fetch('/api/active_tickets');
        const data = await response.json();
        setTickets(data);
    }

    useEffect(() => {
        loadTickets()
    }, []);

    return (
        <>
            <div className="container">
                <h1>Tickets</h1>
            </div>

            <TicketList
                tickets={tickets}
                onComplete={onComplete}>
            </TicketList>

            <div className="container">
                <Link className="btn btn-primary btn-lg m-2" id="newTicketLink" to="/new_ticket">New Ticket</Link>    
            </div>
        </>
    );
}

export default Tickets;