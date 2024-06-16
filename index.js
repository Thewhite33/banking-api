const express = require('express')
const mongoose = require('mongoose')
const dbConnect = require('./config/database')
const bankRoutes = require('./routes/bankRoutes')

const app = express()

const PORT = 3000

dbConnect()

app.use('/api',bankRoutes)

app.get('/',(req,res)=>{
    res.send('<h1>Banking API</h1><p>Search /api/banks to get all banks details</p> <p>Search /api/bankname to get all corresponding bank</p> <p>Search /api/bankname/branchname to get details of particular bank branchname</p>')
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
