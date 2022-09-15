const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_page'
})

db.connect((e)=>{
    if(e){
        throw e;
    } else  {
        console.log('Conexão realizada')
    }
})

module.exports = db;