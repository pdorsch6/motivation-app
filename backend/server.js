const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const API_PORT = process.env.PORT || 3000;
const MONGO_USER = process.env.MONGODB_USER;
const MONGO_PASS = process.env.MONGODB_PASS;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../frontend/build')));

const dbRoute = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@motivationcluster-3p32s.mongodb.net/test?retryWrites=true`;
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

require('./api/models/Quote');
require('./api/models/QuoteCategory');
require('./api/models/Author')

const quoteRouter = require("./api/routes/quote");
const categoryRouter = require("./api/routes/quoteCategory");
const authorRouter = require("./api/routes/author");

app.use('/api/quote', quoteRouter);
app.use('/api/category', categoryRouter);
app.use('/api/author', authorRouter);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));