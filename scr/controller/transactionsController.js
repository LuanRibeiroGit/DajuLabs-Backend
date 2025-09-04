

const TransactionService = require('../services/transactions/transactionService')

const  { getDataSales }  = require('../services/csv/csvReader')

async function transactions(req, res) {
    const data = await getDataSales()
    if(!data){
        return res.status(404).json({ message: 'Nenhum arquivo CSV encontrado na pasta.', status: 0 })
    }

    const transactionManager = new TransactionService(data)
    const response = {
        transactions: transactionManager.getTransactions(),
        refundWithoutSales: transactionManager.getRefundsWithoutSales()
    }
    
    res.status(200).json({ ...response, status: 1 })
}

module.exports = {
    transactions,
}
