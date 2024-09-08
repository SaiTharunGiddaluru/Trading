const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrdersSchema = new Schema({
    name: String,
    mode: String,
    qty: Number,
    price:Number
})

const Orders = mongoose.model("Orders", OrdersSchema);
module.exports = Orders;