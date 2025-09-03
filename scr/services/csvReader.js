const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

const uploadFile = path.join(__dirname, '../../uploads')

let dataSales = []

async function readCsv() {
    try {
        const file = fs.readdirSync(uploadFile)
        
        if(!file[0]){
            return console.error('Nenhum arquivo CSV encontrado na pasta.')
        }
        const fileCSV = path.join(uploadFile, file[0])
        const stream = fs.createReadStream(fileCSV).pipe(csv())
        
        for await (const line of stream) {
            dataSales.push(line)
        }
    } catch (err) {
        console.error(err)
    }
}

async function getDataSales() {
    return dataSales
}

module.exports = {
    readCsv,
    getDataSales
}