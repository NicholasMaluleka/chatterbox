const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 30000
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect('mongodb+srv://lesetjamaluleka:Bluebeast_1@cluster0.os1ljzx.mongodb.net/')
    .catch(err => console.log('Something went wrong...', err))

// Middleware
app.use(express.json())
app.use(cors(corsOptions)) // Use cors() with options


// Routes
const routes = require('./routes/routes');
app.use(routes);

// Listen to port 3000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App running on port ${PORT}...`);
});
