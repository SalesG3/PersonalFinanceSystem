const server = require('../server');

server.app.post('/Cadastro',async function(req,res){

    async function Select(){
        let[query] = await server.SQLcon.execute('SELECT * FROM tbl_usuarios');

        for(i in query){

            if(query[i].user_cpf == req.body.user_cpf){
                
                res.send({
                    falied: req.body.user_cpf,
                    motive: 'CPF já existente no Banco de Dados!'
                })

                return false
            }

            else if(query[i].user_email == req.body.user_email){

                res.send({
                    falied: req.body.user_email,
                    motive: 'Email já existente no Banco de Dados!'
                })

                return false
            }

            else if(query[i].user_contato == req.body.user_contato){

                res.send({
                    falied: req.body.user_contato,
                    motive: 'Contato já existente no Banco de Dados!'
                })

                return false
            }
        }
    }

    async function Insert(){
        let[query] = await server.SQLcon.execute(`INSERT INTO tbl_usuarios (user_nome, user_cpf, 
        user_email, user_contato, user_senha) VALUES ('${req.body.user_nome}','${req.body.user_cpf}',
        '${req.body.user_email}','${req.body.user_contato}','${req.body.user_senha}')`);

        res.send({
            sucess: query.insertId,
            motive: 'Registro salvo no Banco de Dados!'
        })

        return true
    }

    if(await Select() == false){
        return false
    }
    else if(await Insert() == true){
        return true
    }
    else{console.log('ERR!')}
});