const server = require('../server');

server.app.get('/Login/:user_email/:user_senha', async function(req,res){

    let [query] = await server.SQLcon.execute('SELECT * FROM tbl_usuarios');

    for(i in query){

        if(query[i].user_email == req.params.user_email && query[i].user_senha == req.params.user_senha){

            res.send({
                sucess: query[i].user_id,
                user: query[i].user_nome
            });
            
            return true
        }
    };

    res.send({
        falied:'Incorreto'
    });

    return false
});