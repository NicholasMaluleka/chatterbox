const express = require('express')
const app = express()
const PORT = process.env.PORT || 30000
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/WhatsApp')
    .catch(err => console.log('Something went wrong...', err))

// Middleware
app.use(express.json())
app.use(cors()) // Use cors() with options

// Routes
const routes = require('./routes/routes');
app.use(routes);

// Listen to port 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
})
