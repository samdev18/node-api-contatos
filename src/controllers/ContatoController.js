const database = require('../models')

class ContatoController {
    static async get(req, res) {
        try {
            const contatos = await database.Contatos.findAll();
            return res.status(200).json(contatos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async getById(req, res) {
        const { id } = req.params
        try {
            const contato = await database.Contatos.findOne({ where: { id: Number(id) } })
            return res.status(200).json(contato);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async post(req, res) {
        const dados = req.body
        try {
            const pessoa = await database.Contatos.create(dados);
            return (res.status(200).json(pessoa))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async put(req, res) {
        const { id } = req.params
        const dados = req.body
        try {
            await database.Contatos.update(dados, { where: { id: Number(id) } })
            const contato = await database.Contatos.findOne({ where: { id: Number(id) } })
            return (res.status(200).json(contato))
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async delete(req, res) {
        const { id } = req.params
        try {
            await database.Contatos.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ message: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ContatoController