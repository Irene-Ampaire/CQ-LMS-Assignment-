
const { Schema, model } = require('mongoose');

const userSchema = new Schema({

    name: { 
        type: String, 
        required: true 
    },

    email: { 
        type: String, 
        required: true, 
        unique: true 
    },

    password: { 
        type: String, 
        required: true 
    },

    confirm_password: { 
        type: String, 
        required: true 
    },

    mobile_number: { 
        type: String,
         required: true 
    },

    gender: {
         type: String,
         required: true 
    },

    language: { 
        type: String,  
        required: true
     },

    attachment: { 
        type: String, 
        required: true 
    },

    terms_agreed: {
         type: Boolean, 
         required: true 
    }
});


module.exports = model('User', userSchema)



   


