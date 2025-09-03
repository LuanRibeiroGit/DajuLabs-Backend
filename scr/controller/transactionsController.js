const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

const TransactionOrganizer = require('../models/transactionsModels')

const  { getDataSales }  = require('../services/csvReader')

async function transactions(req, res) {
    const data = await getDataSales()
    if(!data){
        return res.status(404).json({ message: 'Nenhum arquivo CSV encontrado na pasta.', status: 0 })
    }

    const organizer = new TransactionOrganizer(data)
    const response = {
        transactions: organizer.getTransactions(),
        refundWithoutSales: organizer.getRefundsWithoutSales()
    }
    
    res.status(200).json({ ...response, status: 1 })
}

module.exports = {
    transactions,
}
