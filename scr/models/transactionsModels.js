
class TransactionOrganizer {
    constructor(data) {
        this.data = data
        this.sales = []
        this.refunds = []
        this._separateData()
    }

    _separateData() {
        this.sales = this.data.filter(item => item.in_estorno === 'F')
        this.refunds = this.data.filter(item => item.in_estorno === 'T')
    }

    getTransactions() {
        return this.sales.map((sale, index) => {
            const refund = this.refunds.find(refund => refund.nr_dctoorigem === sale.nr_dctoorigem)
            return {
                invoice: index,
                transaction: sale,
                refund: refund || null
            }
        })
    }

    getRefundsWithoutSales() {
        return this.refunds
            .map((refund, index) => {
                const saleExists = this.sales.some(sale => sale.nr_dctoorigem === refund.nr_dctoorigem)
                return saleExists ? null : {
                    invoice: index,
                    transaction: null,
                    refund: refund
                }
            })
            .filter(item => item !== null)
    }
}




module.exports = TransactionOrganizer
