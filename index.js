const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const URI = "mongodb+srv://xuio:abcd1234@boiler-plate.srfin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);
