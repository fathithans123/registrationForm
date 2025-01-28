const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    feedback: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Contact = mongoose.model('contact', ContactSchema)
module.exports = Contact;