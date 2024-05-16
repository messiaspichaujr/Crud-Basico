import express from "express";
import {aluno} from "../controller/aluno_controller.js";

let router = express.Router()

router.get('/aluno',aluno.all)
router.post('/aluno', aluno.create)
router.put('/aluno/:matr_aluno', aluno.update)

router.delete('/aluno/:matr_aluno', aluno.delete);
//definir as demais rotas para Update e Delete

export {router}