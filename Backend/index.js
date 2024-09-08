const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoute = require("./Routes/AuthRoute");
const  Holdings  = require("./models/HoldingsSchema");
const  Positions = require("./models/PositionsSchema");
const  Orders  = require("./models/OrdersSchema");

const { MONGO_URL, PORT } = process.env;

const app = express();

// MongoDB connection
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

// Middleware setup
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holdings.find({});
  
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await Positions.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new Orders({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

// Server setup
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
