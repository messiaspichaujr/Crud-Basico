import connect from "../config/connection.js";

let usuario = {} //objeto para troca de dados entre módulos e cliente
const con = await connect()

// FUNÇÃO PRA MOSTRAR TODOS OS CPF
usuario.all = async function (req, res) {

    try{
        
       let result = await con.query("SELECT  * FROM usuario ")
       res.send(result[0])  

    } catch (e) {
        console.log("Erro na consulta...", e)

    }
}

//FUNÇÃO PRA MOSTRAR O CPF
usuario.busca = async function (req, res) {

    try{
        
       const cpf = req.params.cpf_user;
       let result = await con.query("SELECT  * FROM usuario WHERE cpf_user = ?", [cpf])
       res.send(result[0])  

    } catch (e) {
        console.log("Erro na consulta...", e)

    }
}

// FUNÇÃO PRA CRIAR UM CPF
usuario.create = async function (req, res){
    try{
        let usuario = req.body
        let sql = "INSERT INTO usuario (cpf_user, nome_user, email_user) values (?,?,?);"
        let values = [usuario.cpf_user, usuario.nome_user, usuario.email_user]
        let result = await con.query(sql,values)
        res.send({
            status: "Cadastro criado com sucesso!",
            result: result
        })
    
    } catch (e) {
        console.log("Erro........", e)

    } 

}       
                                      
//FUNÇÃO PARA DAR UPDATE
usuario.update = async function(req, res){ 
    try{
        let cpf = req.params.cpf_user
        let usuario = req.body
        let sql = "UPDATE usuario SET nome_user=?, email_user=? WHERE cpf_user=?;"
        const values = [usuario.nome_user, usuario.email_user, cpf]
        let result = await con.query(sql, values)
        res.send({
            status:"Atualização do : " + usuario.nome_user + usuario.email_user +  cpf,
            result: result
        })

    }catch(e){
        console.log("Erro....", e)
    }
}

//FUNÇÃO PARA DAR UPDATE NO CPF
usuario.updatecpf = async function(req, res){
    try{
        let cpf = req.params.cpf_user
        let usuario = req.body
        let sql = "UPDATE usuario SET cpf_user=? WHERE cpf_user=?;"
        const values = [usuario.cpf_user, cpf]
        let result = await con.query(sql, values)
        res.send({
            status:"Atualização do cpf para"+ usuario.cpf_user,
            result: result
        })

    }catch(e){
        console.log("Erro....", e)
    }
}


//FUNÇÃO PARA DELETAR
usuario.delete = async function(req, res){
    try {
        let cpf = req.params.cpf_user
        let sql = "DELETE FROM usuario WHERE cpf_user=?"
        let result = await con.query(sql, [cpf])
        res.send({
            status:"a exclusão do: " + cpf + "foi efetuada",
            result: result
        })

    } catch (e) {
        console.log("ERRO.......", e)
    }
}

export {usuario}


