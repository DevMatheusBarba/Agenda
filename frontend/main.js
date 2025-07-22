//import './assets/css/style.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/login'
import Contato from './modules/contato'

const cadastro = new Login('.form-cadastro')
const login = new Login('.form-login')
const registroContato = new Contato('.form-register')
const editContato = new Contato('.form-edit')

cadastro.init()
login.init()

registroContato.init()
editContato.init()