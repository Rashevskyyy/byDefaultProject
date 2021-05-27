// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('Persons');

// db.serialize(function() {
//   db.run("CREATE TABLE persons (user_id, fname, lname, age, city, phoneNumber, email, companyName Text)");

//   const stmt = db.prepare("INSERT INTO persons VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
//     let id = Math.random();
//     let fname = "Kek";
//     let lname = "Chebyrek";
//     let age = 3;
//     let city = "Kharkiv";
//     let phone = "000-00-00000";
//     let email = "email@gmail.com";
//     let companyName = "DevEducation";
//     stmt.run(id, fname, lname, age, city, phone, email, companyName);
//   stmt.finalize();

//   db.each("SELECT rowid AS user_id, fname, lname, age, city, phoneNumber, email, companyName  FROM persons", function(err, row) {
//       console.log( "User: " + row.id, row.fname, row.lname, row.age, row.city, row, phone, row.email, row.companyName);
//   });
// });

// db.close();

// class SQLite3 {
//   constructor(){
//       this.connection = mySql.createConnection({
//           host: "localhost",
//           user: "sqlite3",
//           password: "sqlite",
//           database: "Persons",
//       });
//       this.connection.connect(function (err) {
//           if (err) {
//               return console.error("Error: " + err.message);
//           } else {
//               console.log("Подключение к серверу MySQL успешно установлено");
//           }
//       });
//   }
// }