import { autenticar } from "../utils/jwt.js";

import * as db from '../repository/diarioRepository.js'

import { Router } from "express";
const endpoints = Router()

endpoints.post('/diario/', autenticar, async (req,resp) =>{
    try {
        let diario = req.body
        diario.idUsuario = req.user.id

        let id = await db.adicionarDiario(diario)

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/diario/' , autenticar ,async (req,resp) => {
    try {
        let idUsuario = req.user.id
        let registros = await db.consultarDiario(idUsuario)
        resp.send(registros)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints