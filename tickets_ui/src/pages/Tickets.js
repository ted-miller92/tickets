import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TicketList from '../components/TicketList';
import Navigation from '../components/Navigation';
import './css/Tickets.css';

function Tickets( {setTicketToComplete} ) {
 
    const navigate = useNavigate();

    const [tickets, setTickets] = useState([]);

    const onComplete = async _id => {
        const response = await fetch(`/api/tickets/toggle_active/${_id}`, {method: 'PUT'});
        
        if (response.status == 200) {
            const newTickets = tickets.filter(e => e._id !== _id);
            setTickets(newTickets);
        } else {
            console.log(`Failed to toggle active status for ticket with id= ${_id}, 
                status code = ${response.status}`);
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
        <div>
            <h1>Tickets</h1>
            <TicketList
                tickets={tickets}
                onComplete={onComplete}>
            </TicketList>
            <div className="links">
                <Link className="link" id="newTicketLink" to="/new_ticket">New Ticket</Link>
            </div>
            
        </div>
    )
}

export default Tickets;