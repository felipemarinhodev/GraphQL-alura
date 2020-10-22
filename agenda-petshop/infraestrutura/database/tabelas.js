class Tabelas {
   init(conexao) {
    this.conexao = conexao
    this.criaClientes()
    this.criaPets()
    this.criaServicos()
    this.criaAtendimentos()

    console.log('tabelas criadas!')
  }

  criaClientes() {
    const sql = 'CREATE TABLE IF NOT EXISTS Clientes (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL, nome varchar(150) NOT NULL, cpf char(11) NOT NULL);'

    this.criaTabela(sql)
  }

  criaPets() {
    const sql = 'CREATE TABLE IF NOT EXISTS Pets (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL, nome varchar(150), donoId int, tipo varchar(100), observacoes text, FOREIGN KEY (donoId) references Clientes(id))'

    this.criaTabela(sql)
  }

  criaServicos() {
    const sql = 'CREATE TABLE IF NOT EXISTS Servicos (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL, nome varchar(150), preco decimal(5,2), descricao text)'

    this.criaTabela(sql)
  }

  criaAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL, clienteId int, petId int, servicoId int, data timestamp, status varchar(100), observacoes text, FOREIGN KEY (clienteId) references Clientes(id), FOREIGN KEY (petId) references Pets(id), FOREIGN KEY (servicoId) references Servicos(id))'

    this.criaTabela(sql)
  }

  criaTabela(sql) {
    this.conexao.query(sql, erro => {
      if(erro) {
        console.log(erro)
      }
    })
  }
}



module.exports = new Tabelas
