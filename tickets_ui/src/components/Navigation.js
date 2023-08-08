/*
Navigation.js Component
Simple navigation component
*/

import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
    return (
        <nav>
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/tickets">Tickets</Link>
            <Link className="navLink" to="/new_ticket">New Ticket</Link>
            <Link className="navLink" to="/items">Items</Link>
            <Link className="navLink" to="/new_item">New Item</Link>
        </nav>
    );
}

export default Navigation;