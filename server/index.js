/* eslint-disable no-undef */
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000

const travelData = require(`./data/travelData.json`)

app.use(cors())

app.get('/', (req,res)=>{
    res.send('server is running')
})

app.get('/travelData', (req,res)=>{
res.send(travelData)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})