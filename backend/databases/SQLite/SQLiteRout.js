const express = require("express");
const sqlite3 = require('sqlite3').verbose(); //+
const db = new sqlite3.Database('Persons');
const path = require('path');
const route = express.Router();
const authToken = require('../../tokenverify');

// let str = 'CREATE TABLE persons (id PRIMARY KEY AUTOINCREMENT, user_id varchar(255), fname varchar(255), lname varchar(255), age varchar(255), city varchar(255), phoneNumber varchar(255), email varchar(255), companyName varchar(255))'

class SQLite3 {
  constructor(){
    this.sqliteDB = new sqlite3.Database('./databases/SQLite/Persons', 
    (err) => {
      if(err){
        console.log('No connection');
      }
      console.log('Connected to SQLite3');
      // this.init();
    });
  }
  // init(){
  //   this.sqliteDB.run(str, () =>{});
  // }
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
      const queryCreate = `INSERT INTO persons (id_user, "firstName", "lastName", age, city, phone, email, company) VALUES ('${userID}', '${newField.firstName}', '${newField.lastName}', ${newField.age}, '${newField.city}','${newField.phone}', '${newField.email}', '${newField.company}') RETURNING *`;
      this.sqliteDB.run(queryCreate);
      this.#setResponse(res, 200, result.rows);
    } catch (err) {
      this.#setResponse(res, 403, 'Something happens');
    }
  }
  async updateById(req, res) {
    try {
      const newField = req.body;
      const key = Object.keys(newField)[0];
      const queryUpdate = `UPDATE persons SET "firstName" = '${newField.firstName}', "lastName" = '${newField.lastName}', age = ${newField.age}, city = '${newField.city}', phone = '${newField.phone}', email = '${newField.email}', company = '${newField.company}' WHERE id_user = '${userID}' AND id = ${newField.id};`;
      this.sqliteDB.run(queryUpdate);
      this.#setResponse(res, 200, result.fields);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }
  async delete(req, res) {
    const userID = req.user.userId;
    try {
        if (req.query.id === 'all') {
          return this.clearAll(req, res);
        }
        const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND id_user = '${userID}'`;
        this.sqliteDB.run(queryDelete);
        this.#setResponse(res, 200, message.successDel);
    } catch (err) {
        this.#setResponse(res, 403, message.abstractErr);
    }
  }
  async clearAll(req, res) {
    const userID = req.user.userId;
    try {
      const queryClearAll = `DELETE FROM persons WHERE id_user = '${userID}'`;
      this.sqliteDB.run(queryClearAll);
      this.#setResponse(res, 200, message.successDel);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
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
