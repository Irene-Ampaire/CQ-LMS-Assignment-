
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
         type: Schema.Types.ObjectId, ref: 'Gender', 
         required: true 
    },

    language: { 
        type: Schema.Types.ObjectId, 
        ref: 'Language', 
        required: true
     },

    attachment: { 
        type: Schema.Types.ObjectId, 
        ref: 'Attachment', 
        required: true 
    },

    terms_agreed: {
         type: Boolean, 
         required: true 
    }
});


module.exports = model('User', userSchema)
   


