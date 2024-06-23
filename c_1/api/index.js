const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Endpoint / ::GET => void
app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

const product = {
    name: "locion",
    price: 15000
}

const products = [
    {
        name: "locion",
        price: 15000
    },
    {
        name: "peluche",
        price: 150000
    },
    {
        name: "termo",
        price: 45000
    },
    {
        name: "gafas",
        price: 105000
    }
]

app.get('/products', (req, res) => {
    res.status(200).json(products)
})

// Endpoint /products ::GET => productos [{}]
app.get('/product/locion', (req, res) => {
    res.status(200).json(product)
})

app.get('/products/id/:id', (req, res) => {

    // Use params
    const { id } = req.params

    res.status(300).send(products[id])

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