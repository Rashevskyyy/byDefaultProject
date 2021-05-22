const mysql = require("mysql");

console.log('Get connection...');

const connect = mysql.createConnection({
    database: 'mytestdb',
    host: 'localhost',
    user: "root",
    password: "root"
});
connect.connect(function (err){
    if(err) throw err;
    console.log("Connected!")
})

