const express = require('express');
const mongoose = require('mongoose');
const routes= require('./routes/ToDoRoute')
const cors = require("cors")
const MONGODB_URL = "mongodb+srv://Dhanusri:roseberry@cluster0.ntudpsp.mongodb.net/ToDoApp?retryWrites=true&w=majority";

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use(cors())

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.error(`MongoDB connection error: ${err}`));

app.use(routes)
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
