# Agenda de Contatos

<!-- Badges das ferramentas utilizadas -->
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-22%2B-green?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/npm-%236C2EBE?logo=npm" alt="npm">
  <img src="https://img.shields.io/badge/Express.js-%23404d59?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb" alt="MongoDB Atlas">
  <img src="https://img.shields.io/badge/EJS-%23A91D22?logo=ejs" alt="EJS">
  <img src="https://img.shields.io/badge/Webpack-%238DD6F9?logo=webpack" alt="Webpack">
</p>



> **Pré-requisitos para executar o projeto:**
>
> - **Node.js** (versão 16 ou superior)
> - **npm** (gerenciador de pacotes do Node.js)
> - **Conta gratuita no MongoDB Atlas** (para banco de dados online)
> - **Git** (para clonar o repositório)
>
> ⚠️ Recomenda-se instalar o [Node.js](https://nodejs.org/) e o [Git](https://git-scm.com/) antes de iniciar.

Sistema completo de gerenciamento de contatos, desenvolvido com Node.js, Express, MongoDB e EJS. Permite cadastro, edição, exclusão e visualização de contatos, além de autenticação de usuários e proteção de rotas.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Principais Dependências](#principais-dependências)
- [Segurança](#segurança)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Funcionalidades


### Funcionalidades Detalhadas

- **Cadastro de usuários e autenticação:**
  - Permite criar uma conta e realizar login/logout.
  - Senhas protegidas e sessões seguras.
- **Cadastro de contatos:**
  - Adicione contatos com nome, sobrenome, telefone e e-mail.
  - Validação de campos obrigatórios e formato de e-mail.
- **Edição e exclusão de contatos:**
  - Edite dados de contatos existentes.
  - Remova contatos da sua lista.
- **Visualização de contatos:**
  - Lista todos os contatos cadastrados.
  - Visualize detalhes de cada contato.
- **Proteção de rotas:**
  - Apenas usuários autenticados podem acessar, editar ou excluir contatos.
- **Mensagens flash:**
  - Exibe mensagens de sucesso, erro e validação para o usuário.
- **Interface dinâmica com EJS:**
  - Templates dinâmicos para renderização das páginas.
- **Arquivos estáticos:**
  - CSS para estilização e JS para interatividade.
- **Middleware global:**
  - Tratamento de erros, proteção CSRF e segurança com Helmet.
- **Validação de dados:**
  - Utiliza o pacote `validator` para garantir e-mails válidos e campos obrigatórios.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/DevMatheusBarba/Agenda
   cd Agenda
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie o arquivo `.env` na raiz do projeto:
   ```env
   CONNECTIONSTRING=mongodb://<usuario>:<senha>@<host>/<database>?retryWrites=true&w=majority&appName=Estudos

   ex:CONNECTIONSTRING=mongodb+srv://<usuario>:<senha>@estudos.ias0xa7.mongodb.net/AGENDA?retryWrites=true&w=majority&appName=Estudos

   Neste caso crie meu banco de dados com o nome Estudos e a minha "tabela" como Agenda
   ```

   > **Observação:** Está sendo utilizado o banco de dados MongoDB, recomendo que crie uma conta gratuita no site do MongoDB atlas e utilize o mesmo para conexão.

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Para empacotar os arquivos estáticos com o Webpack:
   ```bash
   npm run dev
   ```

6. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Configuração

- O arquivo `.env` deve conter a string de conexão do MongoDB.
- O projeto utiliza variáveis de ambiente para maior segurança.

## Como Usar

1. Faça login ou registre-se.
2. Adicione novos contatos preenchendo nome, e-mail e telefone.
3. Edite ou exclua contatos existentes.
4. Apenas usuários autenticados podem gerenciar contatos.

## Estrutura de Pastas

```
├── package.json
├── server.js
├── routes.js
├── webpack.config.js
├── frontend/
│   └── main.js
│   └── assets/
│       └── css/
│           └── style.css
├── public/
│   └── teste.txt
│   └── assets/
│       └── js/
│           └── bundle.js
│           └── bundle.js.map
├── src/
│   └── controllers/
│       └── contatoController.js
│       └── homeController.js
│       └── loginController.js
│   └── middlewares/
│       └── middlewares.js
│   └── models/
│       └── contatoModel.js
│       └── homeModel.js
│       └── loginModel.js
│   └── views/
│       └── 404.ejs
│       └── contato.ejs
│       └── index.ejs
│       └── login-logado.ejs
│       └── login.ejs
│       └── includes/
│           └── footer.ejs
│           └── head.ejs
│           └── messeges.ejs
│           └── nav.ejs
```

## Principais Dependências


### Dependências do Projeto

- **express:** Framework web para Node.js, responsável pelo roteamento e estrutura do servidor.
- **mongoose:** ODM para MongoDB, facilita a modelagem e manipulação dos dados.
- **ejs:** Template engine para renderização dinâmica das páginas HTML.
- **helmet:** Middleware para segurança, adiciona cabeçalhos HTTP que protegem contra vulnerabilidades.
- **csurf:** Middleware para proteção contra ataques CSRF (Cross-Site Request Forgery).
- **express-session:** Gerenciamento de sessões de usuário, essencial para autenticação.
- **connect-mongo:** Armazena sessões no MongoDB, garantindo persistência e escalabilidade.
- **connect-flash:** Permite exibir mensagens temporárias (flash) para o usuário.
- **dotenv:** Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **validator:** Validação de dados, especialmente e-mails e campos obrigatórios.

Outras dependências podem ser utilizadas para desenvolvimento, como o `webpack` para empacotamento de arquivos estáticos.

## Segurança

- Uso de Helmet para proteção de cabeçalhos HTTP
- CSRF Middleware para evitar ataques de falsificação de requisições
- Senhas e dados sensíveis nunca são salvos em arquivos públicos
- Sessões armazenadas de forma segura no MongoDB

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório
2. Crie uma branch (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -am 'Minha nova feature'`)
4. Push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
