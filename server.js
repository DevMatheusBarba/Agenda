require('dotenv').config()

const express = require('express')
const app = express();

const moongose = require('mongoose')
moongose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const flash = require("connect-flash")
const MongoStore = require('connect-mongo');
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const { middlewareGlobal, checkCsrfErros, csrfMiddleware } = require('./src/middlewares/middlewares');

//Adicionando arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(helmet())

const sessionOptions = session({
    secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions);
app.use(flash());

app.use(csrf())
app.use(middlewareGlobal);
app.use(checkCsrfErros);
app.use(csrfMiddleware)
app.use(routes)



//Adicionando Views ao projeto
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');



app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})


