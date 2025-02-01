const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const app = express();


// Connect to MongoDB
const connectWithRetry = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            minPoolSize: 10,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB, retrying in 8 seconds...", err);
        setTimeout(connectWithRetry,  8000); // Retry after 8 seconds
    }
};

connectWithRetry();


// Routes
app.get("/", (req, res) => {
    res.send("Welcome, to Irene's registeration form");
});


// Start the server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

