class TransactionSeparator {
    constructor(criteria) {
        this.criteria = criteria
    }

    separate(data) {
        return {
            sales: data.filter(item => this.criteria.isSale(item)),
            refunds: data.filter(item => this.criteria.isRefund(item))
        }
    }
}

module.exports = TransactionSeparator
