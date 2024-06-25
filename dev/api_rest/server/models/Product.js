const { getDataFromJsonFile } = require('../helpers/helpers');

const jsonPath = `${process.cwd() + '/dev/api_rest/server/data/store.json'}`

// Model for Product
class Product {
    // Get products
    async getAll() {
        try {
            const products = await getDataFromJsonFile(jsonPath)
            return products
        } catch (error) {
            console.log(error)
        }
    }

    // Get one product
    async getOne(id) {
        try {
            const products = await getDataFromJsonFile(jsonPath)
            return products[id]
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    Product
}