const express = require('express')
const router = express.Router()
const readCsv = require('../controller/transactionsController')

router.get('/transactions', readCsv.transactions)

module.exports = router