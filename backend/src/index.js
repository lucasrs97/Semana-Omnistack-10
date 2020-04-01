const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-dx16b.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology : true,
})

//  PERMITIR QUE A API SEJA PÚBLICA (ACESSADA POR QUALQUER PORTA)
app.use(cors());

//  ACEITAR FORMATO JSON
app.use(express.json());

// UTILIZAR ROTAS
app.use(routes);

//  DEFINIR PORTA DO LOCALHOST
app.listen(3333);

