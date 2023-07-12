import mongoose from 'mongoose';
import 'dotenv/config';
import { response } from 'express';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    {dbName: 'tickets'},
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to tickets using Mongoose!");
});

// Schema
const ticketSchema = mongoose.Schema({
    cust_name : {type: String, required: true},
    date : {type: Date, required: true},
    items : {type: Array, required: true},
    active: {type: Boolean, required: true}
});

// Compile model from the Schema
const Ticket = mongoose.model("Ticket", ticketSchema);

// Create
const addTicket = async (cust_name, date, items, active) => {
    const ticket = new Ticket({cust_name: cust_name, 
        date: date, items: items, active: active});

    return ticket.save();
}

// Retrieve active tickets
const getActiveTickets = async() => {
    const query = Ticket.find({"active" : true});
    return query.exec();
}

// Toggle active status for a single ticket
const toggleActiveStatus = async(id) => {
    const query = Ticket.findById(id);
    const ticket = await query.exec();

    if (ticket.active) {
        const result = Ticket.findByIdAndUpdate(id, {active: 'false'}, {new: true});
        return result;
    } else {
        const result = Ticket.findByIdAndUpdate(id, {active: 'true'}, {new: true});
        return result;
    }
}

export {addTicket, getActiveTickets, toggleActiveStatus}