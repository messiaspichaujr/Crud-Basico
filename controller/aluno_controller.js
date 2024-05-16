import connect from "../config/connection.js"

let aluno = {}
const con = await connect()

aluno.all = async function (req, res) {

    try{
        let alunos = await con.query("SELECT * FROM aluno")
        res.send(aluno)

    } catch (e) {
        console.log("Erro na consulta...", e)

    }

}

aluno.create = async function (req, res){

    try{
        let aluno = req.body
        let sql = "INSERT INTO aluno (matr_aluno, nome_aluno, email_aluno) values (?,?,?);"
        let values = [aluno.matr_aluno, aluno.nome_aluno, aluno.email_aluno]
        let result = await con.query(sql,values)
        res.send({
            status: "Inserção Efetuada com sucesso!",
            result: result
        })
    
    } catch (e) {
        console.log("Erro........", e)

    }
}

aluno.update = async function(req, res){
    try{
        let matricula = req.params.matr_aluno
        let aluno = req.body
        let sql = "UPDATE aluno SET nome_aluno=?, email_aluno=? WHERE matr_aluno=?;"
        const values = [aluno.nome_aluno, aluno.email_aluno, matricula]
        let result = await con.query(sql, values)
        res.send({
            status:"Atualização do : " + aluno.nome_aluno + aluno.email_aluno +  matricula,
            result: result
        })

    }catch(e){
        console.log("Erro....", e)
    }
}

aluno.delete = async function(req, res){
    try {
        let matricula = req.params.matr_aluno
        let sql = "DELETE FROM aluno WHERE matr_aluno=?"
        let result = await con.query(sql, [matricula])
        res.send({
            status:"a exclusão do: " + matricula + "foi efetuada",
            result: result
        })

    } catch (e) {
        console.log("ERRO.......", e)
    }
}

export {aluno}

