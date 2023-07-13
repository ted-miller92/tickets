import 'dotenv/config';
import * as tickets from './tickets_model.mjs';
import * as items from './items_model.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';
// import { body, check, validationResult } from 'express-validator';
// import { isDateValid } from './validation/date_validation.mjs';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// create a new ticket
app.post('/tickets', asyncHandler( async (req, res) => {
    const current_date = new Date();
    const date_string = current_date.toDateString()
    const time_string = current_date.toLocaleTimeString();

    const ticket = await tickets.addTicket(req.body.cust_name, 
        date_string, time_string, req.body.items, req.body.active);

    res.send(ticket);
}));

// retrieve all tickets regardless of active status
app.get('/tickets', asyncHandler (async (req, res) => {
    const result = await tickets.getAllTickets();
    res.send(result);
}));

// retrieve only active tickets
app.get('/active_tickets', asyncHandler (async (req, res) => {
    const result = await tickets.getActiveTickets();
    res.send(result);
}));

// toggle active status for one ticket
app.put('/tickets/toggle_active/:_id', asyncHandler (async (req, res) => {
    const result = await tickets.toggleActiveStatus(req.params._id);
    res.send(result);
}));

// update ticket items
app.put('/tickets/:_id', asyncHandler (async (req, res) => {
    const updates = req.body;
    const result = await tickets.updateTicketItems(req.params._id, updates);

    res.send(result);
}));

// create a new item
app.post('/items', asyncHandler( async (req, res) => {
    const item = await items.addItem(req.body.item_name, req.body.price, req.body.sold_out);
    res.send(item);
}));

// get all items
app.get('/items', asyncHandler (async (req, res) => {
    const result = await items.getAllItems();
    res.send(result);
}));

// get all available items
app.get('/available_items', asyncHandler (async (req, res) => {
    const result = await items.getAvailableItems();
    res.send(result);
}));

// toggle sold out status for one item
app.put('/items/toggle_sold_out/:_id', asyncHandler (async (req, res) => {
    const result = await items.toggleSoldOutStatus(req.params._id);
    res.send(result);
}));


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});