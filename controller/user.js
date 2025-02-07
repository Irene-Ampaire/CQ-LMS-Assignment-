const router = require('express').Router();
const User = require('../models/user');
const upload = require('../middleware/middleware');


// Controller function to handle registration
 
const createUser = async (req, res) => {
    try {
        const { name, email, password, confirm_password, mobile_number, gender, language, attachment, terms_agreed } = req.body;
        

        // Create a new user
        const newUser = new User({
            name,
            email,
            password,
            confirm_password,
            mobile_number,
            gender,
            language,
            attachment,
            terms_agreed
        });
        
        if(req.file){
            newUser.attachment = req.file.path;
        }

        // Save the user to the database
        await newUser.save();

        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = createUser