const Login = require('../models/loginModel')

exports.index = (req, res) => {

    if(req.session.user) return res.render('login-logado')
    return res.render('login')
}

exports.register = async (req, res) => {

    try {
        const login = new Login(req.body)
        await login.register()

        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(function () {
                return res.redirect('/login/index')
            });
            return;
        }

        req.flash('sucess','Seu usuário foi criado com sucesso')
        req.session.save(function () {
            return res.redirect('/login/index')
        });

    } catch (error) {
        console.log(error)
        return res.render('404')
    }

}

exports.login = async (req, res) => {

        
    try {
        const login = new Login(req.body)
        await login.login()

        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(function () {
                return res.redirect('/login/index')
            });
            return;
        }

        req.flash('sucess','Você entrou no sistema')
        req.session.user = login.user
        req.session.save(function () {
            return res.redirect('/login/index')
        });

    } catch (error) {
        console.log(error)
        return res.render('404')
    }

}

exports.logout = function (req,res) {
    req.session.destroy();
    res.redirect('/')
}

