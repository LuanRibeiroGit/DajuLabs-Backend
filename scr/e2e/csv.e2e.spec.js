const { test, expect } = require('@playwright/test')


test('Testando api transactions', async ({ request }) => {
    const response = await request.get('http://localhost:4000/transactions')
    expect(response.status()).toBe(200)

    const data = await response.json()
    const transactions = data.transactions
    console.log(transactions[0])
    expect(transactions).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                invoice: expect.any(Number),
                transaction: expect.objectContaining({
                    cd_produto: expect.any(String),
                    in_estorno: expect.any(String),
                    cd_produto: expect.any(String),
                    tp_valor: expect.any(String),
                    cd_empresa: expect.any(String),
                    round: expect.any(String),
                    nr_dctoorigem: expect.any(String),
                    nr_sequencia: expect.any(String),
                    cd_valor: expect.any(String),
                    cd_historico: expect.any(String),
                    in_estorno: expect.any(String),
                    dt_movimento: expect.any(String),
                    dt_cadastro: expect.any(String), 
                }),
            })
        ])
    )
})
