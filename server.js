const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware for parsing JSON and urlencoded form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Placeholder route for testing
app.get('/', (req, res) => {
    res.send('Hello, Social Network API!')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})