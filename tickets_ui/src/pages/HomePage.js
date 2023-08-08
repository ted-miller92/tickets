/*
Main/Home page of the Tickets application. From here the user can navigate to:
- tickets view
- items view
- new ticket
*/

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Tickets Home</h1>
            <div className="bigLinks">
                <Link className="bigLink" id="ticketsViewLink" to="/tickets">
                    <h2>Tickets</h2>
                    <p>See all current tickets</p>
                </Link>

                <Link className="bigLink" id="itemsViewLink" to="/items">
                    <h2>Items</h2>
                    <p>View, edit, add or delete menu items</p>
                </Link>

                <Link className="bigLink" id="newTicketLink" to="/new_ticket">
                    <h2>New Ticket</h2>
                    <p>Create a new ticket</p>
                </Link>

                <Link className="bigLink" id="newItemLink" to="/new_item">
                    <h2>New Item</h2>
                    <p>Create a new menu item</p>
                </Link>
            </div>
        </>
    );
}

export default HomePage;