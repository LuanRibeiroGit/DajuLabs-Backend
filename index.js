const express = require('express')
const cors = require('cors')
const { readCsv } = require('./scr/services/csvReader')

const transactionsRoutes = require('./scr/routes/transactionsRouter')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())


app.use('/', transactionsRoutes)



app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})

readCsv()