const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router
    .get('', (req, res)=>{
        res.send('Home')
    })
    .post('/pessoa', async (req, res) => {
        const { nome, sobrenome, salario } = req.body;
        if (!nome || !sobrenome || !salario) {
            res.status(400).send({message: "Dados inválidos"})
        }
        const pessoa = {
            name: nome,
            lastname: sobrenome,
            salary: salario
        }
        const p = await Person.create(pessoa)
        res.status(201).send({message: 'Pessoa inserida com sucesso', body: p});
    })
    .get('/pessoa', async (req, res) => {
        const pessoa = await Person.find();
        res.status(200).send({data: pessoa})
    })
    .get('/pessoa/:id', async (req, res) => {
        const { id } = req.params;
        const pessoa = await Person.findById(id);
        if (!pessoa || pessoa=="")
        {
            res.status(400).send({message: 'Pessoa não encontrada'});
        }
        res.status(200).send({data: pessoa});
    })
    .delete('/pessoa/:id', async (req, res) => {
        const { id } = req.params;
        const p = await Person.findByIdAndDelete(id);
        res.status(200).send({message: 'Pessoa excluída'});
    })
    .put('/pessoa/:id', async (req, res) => {
        
    })


module.exports = router
