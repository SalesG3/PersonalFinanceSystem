const server = require('../server');

server.app.get('/bancos', async function(req,res){
    
    let Consulta = async function(){

        let [query] = await server.SQLcon.execute(`SELECT * FROM tbl_bancos`)

        res.send(query)
    }

    Consulta()

});

server.app.post('/bancos', async function(req,res){
    
    let Insert = async function(){

        let[query] = await server.SQLcon.execute(`INSERT INTO tbl_bancos (banco_conta, banco_descricao,
            banco_implantacao, banco_limite) VALUES ( '${req.body.banco_conta}', 
            '${req.body.banco_descricao}', '${req.body.banco_implantacao}', '${req.body.banco_limite}')`)

        res.send({
            sucess: query.insertId,
            motive: "Registro salvo no Banco de Dados"
        })

    }

    Insert()

})