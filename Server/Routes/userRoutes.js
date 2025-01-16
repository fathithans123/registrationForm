const express = require('express')          //1
const { registerUser, loginUser } = require('../Controllers/userCtrl')   //don't type


const userRouter = express.Router()         //2

// Route for user registration              
userRouter.post('/', registerUser)          //3
userRouter.post('/login', loginUser)        //4

module.exports = userRouter;                //5