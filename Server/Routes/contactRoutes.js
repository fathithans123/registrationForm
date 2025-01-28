const express = require('express');          //1
const { FeedbackUser } = require('../Controllers/contactCtrl');


const contactRouter = express.Router()         //2

              
contactRouter.post('/feedback', FeedbackUser)          //3

module.exports = contactRouter;                //4