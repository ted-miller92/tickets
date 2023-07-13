import React from 'react';
import { useState, useEffect } from 'react';
import TicketList from '../components/TicketList';

function Tickets() {

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
        <div className="card">

            <TicketList
                tickets={tickets}>
            </TicketList>

        </div>
    )
}

export default Tickets;