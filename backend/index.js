var http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

const db = require('./sql/connection')



app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// NECESSITA DE ADICIONAR DEV E COLOCAR PARA VER MAIS

 
app.get('/developers', async (req, res) =>{
    await db.getUser(req, res)
})
app.post('/createUser', async(req, res)=>{
    db.createUser(req, res)
})
app.post('/deleteDev', async(req, res) =>{
   await db.deleteUser(req, res)
} )
app.listen(port, () =>{
        console.info(`Aplicação rodando na porta ${port}!`)
});
console.log("Servidor escutando na porta "+ port +"...")