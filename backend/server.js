const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Connect DB

// Middleware
app.use(cors()); // <-- add this here
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); //
  });
});
