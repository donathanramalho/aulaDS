const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router
    .get('', (req, res) => {
        res.send('Home');
    })
    
    .post('/pessoa', async (req, res) => {
        try {
            const { nome, sobrenome, salario } = req.body;
            if (!nome || !sobrenome || !salario) {
                return res.status(400).send({ message: "Dados inválidos" });
            }
            const pessoa = {
                name: nome,
                lastname: sobrenome,
                salary: salario
            };
            const p = await Person.create(pessoa);
            res.status(201).send({ message: 'Pessoa inserida com sucesso', body: p });
        } catch (error) {
            res.status(500).send({ message: 'Erro interno ao salvar pessoa', error: error.message });
        }
    })
    
    .get('/pessoa', async (req, res) => {
        try {
            const pessoas = await Person.find();
            res.status(200).send({ data: pessoas });
        } catch (error) {
            res.status(500).send({ message: 'Erro ao buscar pessoas', error: error.message });
        }
    })
    
    .get('/pessoa/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const pessoa = await Person.findById(id);
            if (!pessoa) {
                return res.status(404).send({ message: 'Pessoa não encontrada' });
            }
            res.status(200).send({ data: pessoa });
        } catch (error) {
            res.status(500).send({ message: 'Erro ao buscar pessoa', error: error.message });
        }
    })
    
    .delete('/pessoa/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const p = await Person.findByIdAndDelete(id);
            if (!p) {
                return res.status(404).send({ message: 'Pessoa não encontrada para exclusão' });
            }
            res.status(200).send({ message: 'Pessoa excluída' });
        } catch (error) {
            res.status(500).send({ message: 'Erro ao excluir pessoa', error: error.message });
        }
    })
    
    .put('/pessoa/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, sobrenome, salario } = req.body;
            
            const pessoaAtualizada = {
                name: nome,
                lastname: sobrenome,
                salary: salario
            };
            // { new: true } Mongoose retorna o documento atualizado em vez do antigo
            const p = await Person.findByIdAndUpdate(id, pessoaAtualizada, { new: true });
            if (!p) {
                return res.status(404).send({ message: 'Pessoa não encontrada para atualização' });
            }
            res.status(200).send({ message: 'Pessoa atualizada com sucesso', body: p });
        } catch (error) {
            res.status(500).send({ message: 'Erro ao atualizar pessoa', error: error.message });
        }
    });

module.exports = router;
