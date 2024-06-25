const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

// App Routes
const storeRoutes = require('./routes/storeRoutes')

// Cors configuration for availaty to any client
app.use(cors())
app.use(morgan('dev'))
// JSON format for responses
app.use(express.json())

app.use('/api/store', storeRoutes)

// Endpoint ::GET / => void
app.get('/', (req, res) => {
    res.send('start using this example API by /products')
})

// Fallback route
app.get('/*', (req, res) => {
    res.status(404).json({
        "message": "Error 404 Not Found",
        "status": 404
    })
})

app.listen(3000, () => {
    console.log('working at 3000')
})