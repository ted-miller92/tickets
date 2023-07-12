import mongoose from 'mongoose';
import 'dotenv/config';
import { response } from 'express';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    {dbName: 'items'},
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to items using Mongoose!");
});

// Schema
const itemSchema = mongoose.Schema({
    item_name : {type: String, required: true},
    price : {type: Number, required: true},
    sold_out: {type: Boolean, required: true}
});

// Compile model from schema
const Item = mongoose.model("Item", itemSchema);

// Create
const addItem = async (item_name, price, sold_out) => {
    const item = new Item({item_name: item_name, price: price, sold_out: sold_out});

    return item.save();
}

// Retrieve all
const getAllItems = async() => {
    const query = Item.find();
    return query.exec();
}

// Retrieve one
const getOneItem = async(id) => {
    const query = Item.findById(id);
    return query.exec();
}

// Update one
const updateItem = async(id, updates) => {
    const result = Item.findByIdAndUpdate(id, updates, {new: true});
    return result;
}

// Delete item
const deleteItem = async(id) => {
    const result = Item.findByIdAndDelete(id);
    return result;
}

export {addItem, getAllItems, getOneItem, updateItem, deleteItem}