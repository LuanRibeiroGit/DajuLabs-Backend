class RefundsWithoutSales {
    constructor(sales, refunds) {
        this.sales = sales
        this.refunds = refunds
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

module.exports = RefundsWithoutSales
