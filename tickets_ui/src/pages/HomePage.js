/*
Main/Home page of the Tickets application. From here the user can navigate to:
-tickets view
-items view
-new ticket

*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="links">
            <Link className="link" id="ticketsViewLink" to="/tickets">Tickets</Link>
            <Link className="link" id="itemsViewLink" to="/items">Items</Link>
            <Link className="link" id="newTicketLink" to="/new_ticket">New Ticket</Link>
        </div>
    );
}

export default HomePage;