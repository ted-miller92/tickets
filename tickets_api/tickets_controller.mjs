import 'dotenv/config';
import * as tickets from './tickets_model.mjs';
import * as items from './items_model.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';
import { body, check, validationResult } from 'express-validator';
// import { isDateValid } from './validation/date_validation.mjs';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// create a new ticket
app.post('/tickets', asyncHandler( async (req, res) => {
    const ticket = await tickets.addTicket(req.body.cust_name, 
        req.body.date, req.body.items, req.body.active);

    res.send(ticket);
}));

// retrieve only active tickets
app.get('/active_tickets', asyncHandler (async (req, res) => {
    const result = await tickets.getActiveTickets();
    res.send(result);
}));

// create a new item
app.post('/items', asyncHandler( async (req, res) => {
    const item = await items.addItem(req.body.item_name, req.body.price, req.body.sold_out);

    res.send(item);
}))


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});