const express = require('express')
const app = express()
//Need to start the database here or in a seperate file and import it using mongoose (mongoose.connect)
//can use dotenv to hardcode process.env variables if you don't want to give infromation away such a DB_Url
const mongoose = require('mongoose')
require('dotenv').config();
const path = require('path');


const connectDB = async () => {
  try {
      await mongoose.connect(process.env.DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
          });
  } catch (error) {
      console.log(error.message);
      process.exit(1);
  }
}
connectDB();

app.use(express.json({ extended: false }));
app.use('/store', require('./routes/store'));


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/**
 * Create a mongoose schema that matches the json of the frontend to store the website information.
 **/
