const User = require("../Model/user");
const bcrypt = require('bcryptjs')


const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    //check for password confirmation match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" })
    }

    try {
        //check if email already exists
        const emailExists = await User.findOne({ email })
        if (emailExists) {
            return res.status(400).json({ message: "Email is already registered" })
        }

        //hash the password
        //      What is Salt?
        //A salt is a random piece of data added to a password before it's hashed.
        // It serves as an additional input to the hashing function. 
        // The primary purpose of salt is to make each hashed password unique, even if two users have the same password.

        // Prevents Identical Hashes:   Without salt, if two users have the same password
        // (e.g., "password123"), their hashed passwords would also be the same.
        // This could allow attackers to guess passwords more easily or use precomputed hashes (known as rainbow tables) to crack them.

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        //The number 10 is the "salt rounds"

        //A higher number means more rounds of computation, which makes the process slower and more
        //more secure but also more resource-intensive.

        //By default, 10 rounds are often considered a good balance between security and performance.

        //So, bcrypt.genSalt(10) generates a salt with 10 rounds, which is strong enough for most use cases.

        //bcrypt.hash(password, salt):
        //This function takes the original password and the generated salt, combines them, and hashes them together.

        //create new user with hashed password
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: 'user registered successfully', data: newUser
        });

    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
};

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        //check if user exists
        const userExists = await User.findOne({ email });

        if (!userExists) {
            return res.status(400).json({ message: "Invalid email" })
        }

        //compare entered password with stored hashed password
        const isMatch = await bcrypt.compare(password, userExists.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" })
        }

        //successfulln login 
        res.json({ message: "Login Successfull", data: userExists })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = {
    registerUser,
    loginUser
}