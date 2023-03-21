const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    port: "3307",    
    database: "mall"    
}) 
module.exports = db