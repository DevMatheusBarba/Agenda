const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs') //Para criar o hash
const loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const loginModel = mongoose.model('login', loginSchema)


class Login {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = null
    }


    async login() {
        this.valid()
        if (this.errors.length > 0) return

        this.user = await loginModel.findOne({ email: this.body.email })
    
        if (!this.user) {
            this.errors.push("Usuário ou senha incorreto")
            return
        }
        //Validar senha
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push("Usuário ou senha incorreto")
            this.user = null
            return
        }


    }

    async register() {
        this.valid()
        if (this.errors.length > 0) return

        await this.userExists()
        if (this.errors.length > 0) return



        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt)  //Criando o HASH da senha
        this.user = await loginModel.create(this.body)



    }

    valid() {
        this.cleanUp()
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail invalido')
        if (this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('Senha precisa ter entre 3 e 50 caracteres')


    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }

    async userExists() {
        this.user = await loginModel.findOne({ email: this.body.email })

        if (this.user) this.errors.push('Usuario já existe')
    }

}

module.exports = Login