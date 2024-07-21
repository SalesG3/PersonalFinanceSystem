// Cria servidor utilizando Express

const express = require('express');

const app = express();
app.use(express.json())

app.listen(8000,() => {
    console.log('Servidor Live! http://localhost:8000/')
});


// Permite conexão com FrontEnd via CORS

const cors = require('cors');

app.use(cors({
    origin:'http://127.0.0.1:5500'
}));

// Cria conexão com Banco de Dados MySQL

const mysql = require('mysql2/promise');

const SQLcon = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'2468',
    database:'maindb'
});

// Exporta as conexões


module.exports = {
    app:app,
    SQLcon:SQLcon
}