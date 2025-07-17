import validator from 'validator'


export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }


    init() {
        this.events();
    }

    events() {
        if (!this.form) return

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })

    }

    validate(e) {
        const el = e.target

        const nome = el.querySelector('input[name=nome')
        const sobrenome = el.querySelector('input[name=sonrenome')
        const telefone = el.querySelector('input[name=telefone')
        const email = el.querySelector('input[name=email')

        let error = false
        if (!nome.value) {
            alert('Necessário um nome para cadastrar')
            error = true
        }

        if (email.value && !validator.isEmail(email.value)) {
            alert('Email invalido')
            error = true

        }

        if (!telefone.value && !email.value) {
            alert('pelo menos um contato precisa ser enviado: e-mail ou telefone..')
            error = true
        }


        if (!error) el.submit()


    }
}