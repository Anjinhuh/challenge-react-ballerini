const { prototype } = require('events')
const mysql = require('mysql')
var contagem = 0
var arr = []
// NECESSITA DE ADICIONAR DEV E COLOCAR PARA VER MAIS

const con = mysql.createConnection({
    user: 'root',
    port: 3306,
    database: 'dev'
})

module.exports = {
    createUser(requi, resi){
        con.query(`INSERT INTO developers (nome, profissao, avatar, github, linkedin) VALUES ('${requi.body.nameModal}','${requi.body.ocupacaoModal}','${requi.body.avatarModal}','${requi.body.githubModal}','${requi.body.linkedinModal}') `)
    },
   async getUser(req, res){
       
       const result = con.query("SELECT COUNT('nome')AS contagem FROM developers", function(err, res, field){
           if(err) throw err;
           contagem = res[0].contagem

       })
        const rows = await con.query("SELECT * FROM developers", async function(err, res, field){
            if(err) throw err;
            for(var i = 0; i < contagem; i++){
               arr.push( {nome: res[i].nome,  prof: res[i].profissao, git: res[i].github, linke: res[i].linkedin} )
            }
        })
        await res.send(arr)
        arr.splice(0, arr.length)
    }
}