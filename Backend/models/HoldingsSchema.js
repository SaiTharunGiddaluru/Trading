const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const HoldingsSchema = new Schema({
    name: String,
    avg:Number,
    qty: Number,
    price:Number,
    net: String,
    day:String
})

const Holdings = mongoose.model("Holdings", HoldingsSchema);
module.exports = Holdings;