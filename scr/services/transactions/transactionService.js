const TransactionSeparator = require('./transactionSeparator')
const DefaultCriteria = require('./defaultCriteria')
const TransactionMatcher = require('./transactionMatcher')
const RefundsWithoutSales = require('./refundsWithoutSales')

class TransactionService {
    constructor(data, criteria = new DefaultCriteria()) {
        const separator = new TransactionSeparator(criteria)
        const { sales, refunds } = separator.separate(data)

        this.matcher = new TransactionMatcher(sales, refunds)
        this.withoutSales = new RefundsWithoutSales(sales, refunds)
    }

    getTransactions() {
        return this.matcher.getTransactions()
    }

    getRefundsWithoutSales() {
        return this.withoutSales.getRefundsWithoutSales()
    }
}

module.exports = TransactionService
