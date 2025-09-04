class DefaultCriteria {
    isSale(item) {
        return item.in_estorno === 'F'
    }

    isRefund(item) {
        return item.in_estorno === 'T'
    }
}

module.exports = DefaultCriteria
