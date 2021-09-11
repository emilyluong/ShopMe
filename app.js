const express = require('express')
const app = express()
//Need to start the database here or in a seperate file and import it using mongoose (mongoose.connect)
//can use dotenv to hardcode process.env variables if you don't want to give infromation away such a DB_Url
const mongoose = require('mongoose')
require('dotenv').config();


const connectDB = async () => {
  try {
      await mongoose.connect(process.env.DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
          });
      console.log("Connected to MongoDB...");
  } catch (error) {
      console.log(error.message);
      process.exit(1);
  }
}
connectDB();

const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.json({ extended: false }));
app.use('/store', require('./routes/store'))

/**
 * Create a mongoose schema that matches the json of the frontend to store the website information.
 **/
