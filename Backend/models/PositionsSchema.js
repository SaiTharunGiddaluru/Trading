const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PositionsSchema = new Schema({
    name: String,
    avg:Number,
    qty: Number,
    price:Number,
    net: String,
    day:String,
    isLoss:Boolean
})

const Positions = mongoose.model("Positions", PositionsSchema);
module.exports = Positions;