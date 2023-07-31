import 'dotenv/config';
import * as tickets from './tickets_model.mjs';
import * as items from './items_model.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';
import cors from 'cors';
// import { body, check, validationResult } from 'express-validator';
// import { isDateValid } from './validation/date_validation.mjs';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// create a new ticket
app.post('/api/tickets', asyncHandler(async (req, res) => {
    const current_date = new Date();
    const date_string = current_date.toDateString()
    const time_string = current_date.toLocaleTimeString();

    const ticket = await tickets.addTicket(req.body.cust_name, 
        date_string, time_string, req.body.items, req.body.promo_code, req.body.active);

    res.status(201).send(ticket);
}));

// retrieve all tickets regardless of active status
app.get('/api/tickets', asyncHandler (async (req, res) => {
    if (req.query.code){
        // Microservice Handling
        // If there is a code in the query URL, it will call a different 
        // function in the API model to count the number of tickets that use a 
        // specified promo code
        const promoCode = req.query.code
        console.log(`Searching for tickets that use promo code ${promoCode}`)
        const result = await tickets.promoCodeCount(promoCode);
        res.send({"quantity" : result});
    } else {
        // This gets all tickets
        const result = await tickets.getAllTickets();
        res.send(result);
    }
}));

// retrieve only active tickets
app.get('/api/active_tickets', asyncHandler (async (req, res) => {
    const result = await tickets.getActiveTickets();
    res.send(result);
}));

// toggle active status for one ticket
app.put('/api/tickets/toggle_active/:_id', asyncHandler (async (req, res) => {
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
app.post('/api/items', asyncHandler( async (req, res) => {
    const item = await items.addItem(req.body.item_name, req.body.price, req.body.sold_out);
    res.send(item);
}));

// get all items
app.get('/api/items', asyncHandler (async (req, res) => {
    const result = await items.getAllItems();
    res.send(result);
}));

// get all available items
app.get('/api/available_items', asyncHandler (async (req, res) => {
    const result = await items.getAvailableItems();
    res.send(result);
}));

// toggle sold out status for one item
app.put('/api/items/toggle_sold_out/:_id', asyncHandler (async (req, res) => {
    const result = await items.toggleSoldOutStatus(req.params._id);
    res.send(result);
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});