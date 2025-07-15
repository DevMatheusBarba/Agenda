exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.sucess = req.flash('sucess')
    res.locals.user = req.session.user
    next()
}

exports.checkCsrfErros = (err,req,res,next)=>{
    if(err){
        console.log(err)
        return res.render('404')
    }

    next();
}


exports.csrfMiddleware = (req,res,next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}