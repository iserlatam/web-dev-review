const fs = require('fs');

const getDataFromJsonFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject('No se ha podido encontrar la dirección del archivo o hubo un error al leerlo')
            } else {
                resolve(JSON.parse(data))
            }
        })
    })
}

module.exports = {
    getDataFromJsonFile
}