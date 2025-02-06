const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const User = require('./models/User');
const multer = require('multer');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const registerRoute = require("./controller/router");

dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json()); 
app.use('/uploads', express.static('uploads'));

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


const storage = multer.diskStorage({destination: (req, file, cb)=>
    {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})


// Routes
app.get("/", (req, res) => {
    res.send("Welcome, to Irene's registeration form");
});

app.use('/api', registerRoute);


// Start the server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
