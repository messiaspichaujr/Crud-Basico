import express from "express";
import {usuario} from "../controller/user_controller.js";

let router = express.Router()

router.get('/usuario',usuario.all);
router.post('/usuario',usuario.create); 
router.put('/usuario/:cpf_user', usuario.update);
router.put('/usuario-cpf/:cpf_user', usuario.updatecpf);
router.delete('/usuario/:cpf_user', usuario.delete);
router.get('/usuario/:cpf_user',usuario.busca);

export {router}

