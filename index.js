const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('./config/database')
const bankRoutes = require('./routes/bankRoutes')

const app = express()

const PORT = 3000

dbConnect()

app.use('/api',bankRoutes)

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})