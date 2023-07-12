import 'dotenv/config';
import * as tickets from './tickets_model.mjs';
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




app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});