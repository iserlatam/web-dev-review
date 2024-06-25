const { Product } = require("../models/Product")

const product = new Product()

const getProducts = async (req, res) => {
    const data = await product.getAll()
    res.status(200).json(data)
}

const getProduct = async (req, res) => {
    const data = await product.getOne(req.params.id)
    res.status(300).json(data)
}

module.exports = {
    getProducts,
    getProduct
}