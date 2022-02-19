var http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

const db = require('./sql/connection')

db.getUser()

app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) =>{
        res.send('HELLO WORLD')
}) 

app.listen(port, () =>{
        console.info(`Aplicação rodando na porta ${port}!`)
});
console.log("Servidor escutando na porta "+ port +"...")