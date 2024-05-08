import express from "express";
import {aluno} from "../controller/aluno_controller.js";

let router = express.Router()

router.get('/aluno',aluno.all)
//definir as demais rotas para o restante do CRUD

export {router}