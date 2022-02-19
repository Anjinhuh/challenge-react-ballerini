const { prototype } = require('events')
const mysql = require('mysql')
var contagem = 0

const con = mysql.createConnection({
    user: 'root',
    port: 3306,
    database: 'dev'
})

module.exports = {
    createUser(){
        con.query("INSERT INTO developers (nome, profissao) VALUES ('juliano', 'engenheiro') ")
    },
   async getUser(){
       const conn = con.connect()
       const result = con.query("SELECT COUNT('nome')AS contagem FROM developers", function(err, res, field){
           if(err) throw err;
           contagem = res[0].contagem

       })
        const rows =  await con.query("SELECT * FROM developers", function(err, res, field){
            if(err) throw err;
            for(var i = 0; i < contagem; i++){
                console.log('Nome: '+res[i].nome+' Profissão: '+res[i].profissao)
            }

        })
    }
}