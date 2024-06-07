const mysql = require('mysql12');
const cors = require('cors');
const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
const port = 5000;
const app = express();

const db = mysql.createConnection({
    host: 'mysql-2480cbc6-iesb-pi2a2024.h.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_FhpJunTAM7Hz3pU4pIM',
    database: 'defaultdb',
    port: 22150
})



//db.query(query, (err, results) =>{
//    if(err){
 //       res.status(500).json({error: 'Erro ao consultar o Banco de dados'});
 //       return;
   // }
    //res.json(results);
//});
//const query = 'SELECT nome, nacionalidade FROM classificacao WHERE nome IS NOT NULL AND nacionalidade IS NOT NULL' ;

app.post('/Cadastro', async (req,res) => {
    const cadastro = await Cadastro
});

app.listen(port, () =>{
    console.log('Servidor rodando em http://localhost:${port}');
});