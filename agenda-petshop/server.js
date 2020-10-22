const customExpress = require('./config/custom-express')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')
const { Client } = require('pg')
const app = customExpress()

const client = new Client({ ...conexao })

client.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(client)
})

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000')
})
