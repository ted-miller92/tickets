import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/tickets">Tickets</Link>
            <Link to="/items">Items</Link>
        </nav>
    );
  }

  export default Navigation;