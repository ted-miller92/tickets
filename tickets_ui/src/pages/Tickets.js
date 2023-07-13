import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TicketList from '../components/TicketList';
import './css/Tickets.css';

function Tickets() {

    const navigate = useNavigate();

    const [tickets, setTickets] = useState([]);

    const loadTickets = async () => {
        const response = await fetch('/active_tickets');
        const data = await response.json();
        setTickets(data);
    }

    useEffect(() => {
        loadTickets()
    }, []);

    return (
        <div>
            <h2>Tickets</h2>
            <TicketList
                tickets={tickets}>
            </TicketList>
            <div className="links">
                <Link className="link" id="newTicketLink" to="/new_ticket">New Ticket</Link>
            </div>
            
        </div>
    )
}

export default Tickets;