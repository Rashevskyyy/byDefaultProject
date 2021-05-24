const mysql = require("mysql");

function enableMysql () {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "root",
        database: "table_person",
        insecureAuth: true,
        options: { trustedConnection: true }
    });
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
    // // добавление обьекта
    // const person = [1, "Biba", "Boba", 11, "Kharkiv", "38066574125", "skelllar@gmail.com", "DevEd", "1"];
    // const sql = "INSERT INTO persons(id, fname, lname, age, city, phoneNumber, email, companyName, user_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
    //
    // connection.query(sql, person, function(err, results) {
    //     if(err) console.log(err);
    //     else console.log("Данные добавлены");
    // });
    // // получение объектов
    // connection.query(sql, function(err, results) {
    //     if(err) console.log(err);
    //     console.log(results);
    // });
}


module.exports = enableMysql
