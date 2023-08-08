require('dotenv').config();

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// instantiate express server as app
const express = require('express')
const app = express()


// cors middleware
app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Bodyparser middleware
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );


// Connect to MongoDB
const db = process.env.MONGOURI;
mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log("DB successfully connected"))
        .catch(err => console.log(err));


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})