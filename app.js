const express = require('express')
const app = express()
//Need to start the database here or in a seperate file and import it using mongoose (mongoose.connect)
//can use dotenv to hardcode process.env variables if you don't want to give infromation away such a DB_Url
const mongoose = require('mongoose')

const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/**
 * Create a mongoose schema that matches the json of the frontend to store the website information.
 * 
 * 
 * 
 **/