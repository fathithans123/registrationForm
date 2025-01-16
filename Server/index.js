require('dotenv').config()
const express = require('express');             //1
const RunServer = require('./Database/Connection');
const cors = require('cors');
const userRouter = require('./Routes/userRoutes.js');



const app = express();                         //2
const port = 8000;                             //3

RunServer()                                    //4

app.use(express.json())                        //5
app.use(cors())

//app.use(): This function is used in Express.js to mount middleware
// functions at a specific path. Middleware functions can perform a variety of tasks,
//such as modifying requests and responses or ending the request-response cycle.

app.use('/api/user', userRouter)

app.listen(port, ()=> {                        //6
    console.log(`server is running on ${port}`)
})