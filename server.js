var mysql = require('mysql2')

var conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345'
})

conexao.connect(function(erro) {
    if (erro) throw erro
    console.log("conectado!")

    //Criando o Banco de Dados
    conexao.query("CREATE DATABASE crud2", function(erro, result) {
        if (erro) throw erro
        console.log("Banco conectado")
    })

    //Usando o BD
    conexao.query("USE crud2", function(erro, result) {
        if (erro) throw erro
        console.log("Banco crud2 conectado")
    })

    //Criando Tabela
    var tableFuncionario = "CREATE TABLE funcionario (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(60) NOT NULL, data_nasc DATE NOT NULL)"
    conexao.query(tableFuncionario, function(erro, result) {
        if (erro) throw erro
        console.log("Tabela funcionário criada")
    })

    var tableEndereco = "CREATE TABLE endereco (rua VARCHAR(50), n INT, bairro VARCHAR(40), cidade VARCHAR(40))"
    conexao.query(tableEndereco, function(erro, result) {
        if (erro) throw erro
        console.log("Tabela endereço criada")
    })

    //Inserindo dados
    var nome = 'Jack'
    var data_nascimento = '1989-10-20'
    var inserirDados = `INSERT INTO funcionario (nome, data_nasc) VALUES ('${nome}', '${data_nascimento}'), ('Mariana', '1990-10-25')`
    conexao.query(inserirDados, function(erro, result) {
        if (erro) throw erro
        console.log("Dados inseridos com sucesso")
    })

    var rua = 'Av. Andromeda'
    var numero = '1000'
    var bairro = 'Satelite'
    var cidade = 'São José dos Campos'
    var inserirDados = `INSERT INTO endereco (rua, n, bairro, cidade) VALUES ('${rua}', '${numero}', '${bairro}', '${cidade}'),('Av. Cidade Jardim', '1234', 'Bosque', 'São José dos Campos')`
    conexao.query(inserirDados, function(erro, result) {
        if (erro) throw erro
        console.log("Endereço inserido com sucesso")
    })

    //Listando os dados
    conexao.query("SELECT * FROM funcionario", function(erro, result, fields) {
        if (erro) throw erro
        console.log(result)
    })

    //Modificando a tabela
    var modificarDados = "UPDATE funcionario SET nome = 'José' WHERE nome = 'Jack'"
    conexao.query(modificarDados, function(erro, result) {
        if (erro) throw erro
        console.log(result.affectedRows + "- Registro alterado")
    })

    conexao.query("SELECT * FROM funcionario", function(erro, result) {
        if (erro) throw erro
        console.log(result)
    })

    //Deletando dados
    var apagarNome = 'José'
    var apagarDados = `DELETE FROM funcionario WHERE nome = '${apagarNome}'`
    conexao.query(apagarDados, function(erro, result) {
        if (erro) throw erro
        console.log("Registo Apagado: " + result.affectedRows)
    })

    conexao.query("SELECT * FROM funcionario", function(erro, result) {
        if (erro) throw erro
        console.log(result)
    })

})