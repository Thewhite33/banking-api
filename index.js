const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('./config/database')
const bankRoutes = require('./routes/bankRoutes')

const app = express()

const PORT = process.env.PORT

dbConnect()

app.use('/',bankRoutes)

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})