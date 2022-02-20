const { prototype } = require('events')
const mysql = require('mysql')
var contagem = 0
var arr = []
const con = mysql.createConnection({
    user: 'root',
    port: 3306,
    database: 'dev'
})

module.exports = {
    createUser(){
        con.query("INSERT INTO developers (nome, profissao) VALUES ('juliano', 'engenheiro') ")
    },
   async getUser(req, res){
       
       const result = con.query("SELECT COUNT('nome')AS contagem FROM developers", function(err, res, field){
           if(err) throw err;
           contagem = res[0].contagem

       })
        const rows = await con.query("SELECT * FROM developers", async function(err, res, field){
            if(err) throw err;
            for(var i = 0; i < contagem; i++){
               arr.push( {nome: res[i].nome,  prof: res[i].profissao} )
            }
        })
        await res.send(arr)
        arr.splice(0, arr.length)
    }
}