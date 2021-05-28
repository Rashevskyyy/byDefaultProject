const express = require("express");
const sqlite3 = require('sqlite3').verbose(); //+
// const db = new sqlite3.Database('Persons');
const path = require('path');
const route = express.Router();
const authToken = require('../../tokenverify');

// let str = 'CREATE TABLE persons (id PRIMARY KEY AUTOINCREMENT, user_id varchar(255), "fName" varchar(255), "lName" varchar(255), age varchar(255), city varchar(255), "phoneNumber" varchar(255), email varchar(255), "companyName" varchar(255))'

class SQLite3 {
  constructor(){
    this.sqliteDB = new sqlite3.Database('./databases/SQLite/Persons.db', 
    (err) => {
      if(err){
        console.log('No connection');
      }
      console.log('Connected to SQLite3');
    });
  }
  async getRequest(req, res){
    try {
      const userID = req.user.userId;
      const queryAll = `SELECT * FROM persons WHERE user_id = '${userID}'`;
      this.sqliteDB.all(queryAll, (err, result) => {
        if (err) return this.#setResponse(res, 403, 'Something happens');
        if (req.query.sort || req.query.sort !== 'id') {
          result.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
        }
        this.#setResponse(res, 200, result);
      });
    } catch (err) {
      this.#setResponse(res, 403, 'Something happens'); 
    }
  }
  async create(req, res) {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const queryCreate = `INSERT INTO persons (user_id, fName, lName, age, city, phoneNumber, email, companyName) VALUES ('${userID}', '${newField.fName}', '${newField.lName}', '${newField.age}', '${newField.city}','${newField.phoneNumber}', '${newField.email}', '${newField.companyName}')`;
      this.sqliteDB.run(queryCreate);
      this.#setResponse(res, 200);
    } catch (err) {
      this.#setResponse(res, 403, 'Something happens');
    }
  }
  async updateById(req, res) {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const queryUpdate = `UPDATE persons SET fName = '${newField.fName}', lName = '${newField.lName}', age = '${newField.age}',
      city = '${newField.city}', phoneNumber = '${newField.phoneNumber}', email = '${newField.email}', companyName = '${newField.companyName}' WHERE user_id = '${userID}' AND id = ${newField.id};`;
      this.sqliteDB.run(queryUpdate);
      this.#setResponse(res, 200);
    } catch (err) {
      this.#setResponse(res, 403, 'Something happens');
    }
  }
  async delete(req, res) {
    const userID = req.user.userId;
    try {
        if (req.query.id === 'all') {
          return this.clearAll(req, res);
        }
        const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND user_id = '${userID}'`;
        this.sqliteDB.run(queryDelete);
        this.#setResponse(res, 200);
    } catch (err) {
        this.#setResponse(res, 403, 'Something happens');
    }
  }
  async clearAll(req, res) {
    const userID = req.user.userId;
    try {
      const queryClearAll = `DELETE FROM persons WHERE user_id = '${userID}'`;
      this.sqliteDB.run(queryClearAll);
      this.#setResponse(res, 200);
    } catch (err) {
      this.#setResponse(res, 403, 'Something happens');
    }
  }
  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message
    });
  }
}

const persons = new SQLite3();

route.get("/",  authToken, (req, res, next) => {
  persons.getRequest(req, res)
});
route.post("/", authToken,  (req, res, next) => {
  persons.create(req, res)
});
route.delete("/", authToken,  (req, res, next) => {
  persons.delete(req, res)
});
route.put("/",  authToken, (req, res, next) => {
  persons.updateById(req, res)
});

module.exports = route;
