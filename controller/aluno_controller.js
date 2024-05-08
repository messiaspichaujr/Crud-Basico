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
export {aluno}
