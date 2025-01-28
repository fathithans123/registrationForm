
const Contact = require('../Model/contact');


const FeedbackUser = async (req, res) => {
    const { UserName, email, feedback } = req.body;

    
    try {
        //check if email already exists
        const emailExists = await Contact.findOne({ email })
        if (emailExists) {
            return res.status(400).json({ message: "Email is already registered" })
        }

     
       

        
        //create new user with hashed password
        const newContact = await Contact.create({
            UserName,
            email,
           feedback
        });

        res.status(201).json({
            message: 'Feedback Submitted', data: newContact
        });

    } catch (error) {
        res.status(500).json({ message: "Feedback Required" })
    }
};


module.exports = {
    FeedbackUser
}