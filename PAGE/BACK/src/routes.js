const routes = require('express').Router();
const connection = require('./config/connection')

routes.get('/', (req, res) => {
    connection.query('SELECT * FROM cadastros', (e, rows, fields) => {
        if (!e)
            res.send(rows);
        else
            console.log(e);
    })
})

routes.get('/:id', (req, res) => {
    const { id } = req.params
    connection.query(`SELECT * FROM cadastros WHERE id = '${id}'`, (e, rows, fields) => {
        if (!e)
            res.send(rows[0]);
        else
            console.log(e);
    })
})

routes.post('/', (req, res) => {
    const data = {
        nome: req.body.nome, email: req.body.email, senha: req.body.senha,
        telefone: req.body.telefone, cpf: req.body.cpf, nivel: req.body.nivel, ativo: req.body.ativo
    }
    connection.query('INSERT INTO cadastros SET ?', data, (e, rows, fields) => {
        if (!e)
            res.send(rows);
        else
            console.log(e);
    })
})

routes.put('/:id', (req, res) => {
    const { id } = req.params
    const { nome, email, senha, telefone, cpf, nivel, ativo } = req.body

    connection.query(`UPDATE cadastros SET nome ='${nome}', email ='${email}',
    senha ='${senha}', telefone ='${telefone}',cpf = '${cpf}', nivel = '${nivel}', 
    ativo = '${ativo}' WHERE id = '${id}'`, (e, rows, fields) => {
        if (!e)
            res.send(rows);
        else
            console.log(e);
    })
})

routes.delete('/:id', (req, res) => {
    const { id } = req.params
    const { nome, email, senha, telefone, cpf, nivel, ativo } = req.body

    connection.query(`DELETE FROM cadastros WHERE id = '${id}'`, (e, rows, fields) => {
        if (!e)
            res.send(rows);
        else
            console.log(e);
    }) 
    
})

module.exports = routes;