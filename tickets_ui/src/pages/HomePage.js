/*
Main/Home page of the Tickets application. From here the user can navigate to:
-tickets view
-items view
-new ticket

*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();


    return (
        <div>
            <Link id="ticketsViewLink" to="/tickets">Tickets</Link>
            <Link id="itemsViewLink" to="/items">Items</Link>
            <Link id="newTicketLink" to="/new_ticket">New Ticket</Link>
        </div>
    );
}

export default HomePage;