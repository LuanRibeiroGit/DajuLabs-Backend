class TransactionMatcher {
    constructor(sales, refunds) {
        this.sales = sales
        this.refunds = refunds
    }

    getTransactions() {
        return this.sales.map((sale, index) => {
            const refund = this.refunds.find(refund => refund.nr_dctoorigem === sale.nr_dctoorigem && sale.cd_produto === refund.cd_produto)
            return {
                invoice: index,
                transaction: sale,
                refund: refund || null
            }
        })
    }
}

module.exports = TransactionMatcher
