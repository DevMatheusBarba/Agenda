const mongoose = require('mongoose')
const validator = require('validator')


const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now }

})

const ContatoModel = mongoose.model('Contato', ContatoSchema)


class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null
    }


    async registra() {
        this.valid();
        if (this.errors.length > 0) return

        this.contato = await ContatoModel.create(this.body)
    }


    valid() {
        this.cleanUp()
        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail invalido')
        if (!this.body.nome) this.errors.push('Nome é um campo obrigatório.')
        if (!this.body.email && !this.body.telefone) this.errors.push('pelo menos um contato precisa ser enviado: e-mail ou telefone..')

    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            telefone: this.body.telefone,
            email: this.body.email,

        }

    }

    static async buscaPorId(id) {

        if (typeof id !== 'string') return;

        const user = await ContatoModel.findById(id)
        return user
    }

    async edit(id) {
        if (typeof id !== 'string') return
        this.valid()

        if (this.errors.length > 0) return
        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })

    }

    static async buscaContatos() {

        const contatos = await ContatoModel.find().sort({ criadoEm: -1 })
        return contatos
    }

    static async delete(id) {
        if (typeof id !== 'string') return
        const contato = await ContatoModel.findOneAndDelete({ _id: id})

        return contato
    }


}
module.exports = Contato