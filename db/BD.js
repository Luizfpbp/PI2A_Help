const mysql = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 22150

const db = mysql.createConnection({
    host: 'mysql-2480cbc6-iesb-pi2a2024.h.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_FhpJunTAM7Hz3pU4pIM',
    database: 'defaultdb',
    port: port
})

app.use(express.json());
app.options('*', cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
    next();
})

app.get('/users', async (req,res) => {
    const query = `SELECT nome, nacionalidade
                    FROM classificacao 
                    WHERE nome IS NOT NULL AND nacionalidade IS NOT NULL`
    
    db.query(query, function (err, result) {
        if (err) {res.status(400).json({ error: 'Oh no' })};
        res.status(200).json({ sucesso: result })
    });

});


// o resto das query aqui poha


app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});