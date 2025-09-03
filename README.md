# 📌 Projeto DajuLabs - Leitura e Organização de CSV

Este é um projeto backend em **Node.js** que realiza a leitura de arquivos CSV, organiza os dados em memória e disponibiliza uma **API REST** para consumo.  
O foco principal é processar transações e identificar devoluções associadas ou não a vendas.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [CSV-Parser](https://www.npmjs.com/package/csv-parser)  
- [Playwright](https://playwright.dev/) (para testes E2E)

---

## 📂 Estrutura do Projeto
```
├── scr
│ ├── controller
│ │ └── transactionsController.js # Controller da API
│ ├── e2e
│ │ └── csv.e2e.spec.js # Testes E2E da API
│ ├── models
│ │ └── transactionsModels.js # Model de transações
│ ├── routes
│ │ └── transactionsRouter.js # Rotas da API
│ ├── services
│ │ └── csvReader.js # Serviço de leitura do CSV
├── uploads
│ └── vendas_e_devoluções.csv # Arquivo CSV de exemplo
├── index.js # Inicialização do servidor
├── package.json
└── README.md
```

---

## ⚙️ Funcionamento

- O serviço `csvReader.js` é executado assim que o servidor inicializa, lendo o arquivo CSV da pasta `uploads/`.  
- Os dados são armazenados em memória (array).  
- A rota `/transactions` retorna as transações organizadas em JSON.  
- As transações são divididas entre **vendas** e **devoluções**.  

### Exemplo de Resposta da API

```json
{
  "transactions": [
    {
      "invoice": 13,
      "transaction": {
        "cd_produto": "252013",
        "tp_valor": "C",
        "cd_empresa": "2",
        "round": "44.53",
        "nr_dctoorigem": "346991",
        "nr_sequencia": "76971",
        "cd_valor": "8",
        "cd_historico": "11",
        "in_estorno": "F",
        "dt_movimento": "2025-02-25 00:00:00.000",
        "dt_cadastro": "2025-02-25 09:50:00.000"
      },
      "refund": {
        "cd_produto": "252013",
        "tp_valor": "C",
        "cd_empresa": "2",
        "round": "44.53",
        "nr_dctoorigem": "346991",
        "nr_sequencia": "77423",
        "cd_valor": "8",
        "cd_historico": "11",
        "in_estorno": "T",
        "dt_movimento": "2025-02-25 00:00:00.000",
        "dt_cadastro": "2025-02-25 10:42:42.000"
      }
    }
  ],
  "refundWithoutSales": [
    {
      "invoice": 0,
      "transaction": null,
      "refund": {
        "cd_produto": "259165",
        "tp_valor": "P",
        "cd_empresa": "1",
        "round": "89.90",
        "nr_dctoorigem": "346528",
        "nr_sequencia": "77836",
        "cd_valor": "1",
        "cd_historico": "7",
        "in_estorno": "T",
        "dt_movimento": "2025-02-25 00:00:00.000",
        "dt_cadastro": "2025-02-25 11:36:26.000"
      }
    }
  ],
  "status": 1
}
```
---

## 📡 Rotas Disponíveis

GET /transactions

Retorna as transações processadas do CSV.

200 OK → Dados encontrados

404 Not Found → Nenhum CSV disponível

---

## 🧪 Testes

Os testes foram feitos com Playwright no arquivo scr/e2e/csv.e2e.spec.js.
Eles validam:

Se a API /transactions responde com status 200.

Se o JSON contém transações válidas.

Se existe pelo menos uma transação sem devolução.

---

## ▶️ Como Executar o Projeto

Instale as dependências:

npm install


Coloque seu arquivo CSV na pasta uploads/.

Inicie o servidor:

npm run dev


Acesse a API em:

http://localhost:4000/transactions

---

## ⚡ Comandos Úteis

Rodar servidor: npm run dev

Executar apenas os testes: npm run test:e2e

Rodar servidor + testes em paralelo: npm run dev:test



