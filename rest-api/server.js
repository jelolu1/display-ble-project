
// Mongodb atlas password CCdk1A2lA9rtGLrg

require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


/* const corsOption = {
    origin: ['http://localhost:3000'],
}; */

app.use(cors());

// Conect to a mongodb in localhost named subscribers
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to DB'));

// Set up server to use JSON
// Use any middleware that we want -> Code that runs when the server gets a request but before it gets passed to routes
app.use(express.json());

// Set out a router -> this is going to route all subscribers information
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter); // Everything with this route'localhost:3000/subscribers' goes to subscribers.js


/**
 * Bluetooth
 */






// Alocate server in port 3000 and function is executed each time that the server is started
app.listen(3000, () => console.log('Server Started'));