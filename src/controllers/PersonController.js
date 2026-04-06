const Person = require('../models/Person');

class PersonController {
    static async create(req, res) {
        try {
            const { name, lastName, salary } = req.body;
            if (!name || !lastName || !salary) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            
            const personData = {
                name,
                lastName,
                salary
            };
            const newPerson = await Person.create(personData);
            return res.status(201).json({ message: 'Pessoa criada com sucesso', data: newPerson });

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar pessoa', error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const people = await Person.find();
            return res.status(200).json({ data: people });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar pessoas', error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const person = await Person.findById(id);
            if (!person) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ data: person });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao encontrar pessoa', error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, lastName, salary } = req.body;
            const updatedData = {
                name,
                lastName,
                salary
            };
            const updatedPerson = await Person.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedPerson) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ message: 'Pessoa atualizada com sucesso', data: updatedPerson });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar pessoa', error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedPerson = await Person.findByIdAndDelete(id);
            if (!deletedPerson) {
                return res.status(404).json({ message: 'Pessoa não encontrada' });
            }
            return res.status(200).json({ message: 'Pessoa deletada com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar pessoa', error: error.message });
        }
    }
}

module.exports = PersonController;
