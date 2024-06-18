const express = require('express')
const connectDB = require('./utils/db')
require('dotenv').config();
const app = express()
const router = require ('./routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/api',router)

const PORT = 8080 || process.env.port

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Connect to mongodb");
        console.log(`Server is running at ${PORT}`);
    })
})
    