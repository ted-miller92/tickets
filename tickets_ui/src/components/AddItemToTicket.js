import React from "react";

function AddItemToTicket({setIsOpen}) {
    return (
        <div>
            <h1>ADD ITEM TO TICKET</h1>
            <button onClick={() => setIsOpen(false)}>CLOSE</button>
        </div>
    )
}

export default AddItemToTicket;