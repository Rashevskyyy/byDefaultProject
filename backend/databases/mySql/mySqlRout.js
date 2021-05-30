const express = require("express");
const mySql = require("mysql");
// const validation = require("../../../validation/validation");
const path = require('path');

const route = express.Router();
const authToken = require('../../tokenverify')

class MySql {
    constructor() {
        this.connection = mySql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "table_person",
        });
        this.connection.connect(function (err) {
            if (err) {
                return console.error("Ошибка: " + err.message);
            } else {
                console.log("MySQL подключена");
            }
        });
    }

    async getRequest(req, res) {
        try {
            const userID = req.user.userId;
            const queryAll = `SELECT * FROM persons WHERE user_id = '${userID}'`;
            this.connection.query(queryAll, (err, result) => {
                this.#setResponse(res, 200, result);
            });
        } catch (err) {
            this.#setResponse(res, 403, {message: "Bad request"});
        }
    }

    async create(req, res) {
        try {
            const newField = req.body;
            const userID = req.user.userId;
            const queryAll = `SELECT * FROM persons WHERE user_id = '${userID}'`;
            const queryCreate = `INSERT INTO persons (user_id, fName, lName, age, city, phoneNumber, email, companyName) VALUES ('${userID}', '${newField.fName}', '${newField.lName}', '${newField.age}', '${newField.city}','${newField.phoneNumber}', '${newField.email}', '${newField.companyName}')`;
            await this.connection.query(queryCreate);
            this.connection.query(queryAll, (err, result) => {
                this.#setResponse(res, 200, result);
            });
        } catch (err) {
            console.log(err);
            this.#setResponse(res, 403, {message: "Bad request"});
        }
    }

    async updateById(req, res) {
        try {
            const newField = req.body;
            const userID = req.user.userId;
            const queryAll = `SELECT * FROM persons WHERE user_id = '${userID}'`;
            const key = Object.keys(newField)[0]
            const queryUpdate = `UPDATE persons SET ${key} = '${newField[key]}' WHERE user_id = '${userID}' AND id = '${req.query.id}'`;
            await this.connection.query(queryUpdate);
            this.connection.query(queryAll, (err, result) => {
                this.#setResponse(res, 200, result);
            });
        } catch (err) {
            console.log(err);
            this.#setResponse(res, 403, {message: "Bad request"});
        }
    }

    async delete(req, res) {
        const userID = req.user.userId;
        try {
            if (req.query.id === 'all') {
                return this.clearAll(req, res);
            }
            const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND user_id = '${userID}'`;
            const queryAll = `SELECT * FROM persons WHERE user_id = '${userID}'`;
            await this.connection.query(queryDelete);
            this.connection.query(queryAll, (err, result) => {
                this.#setResponse(res, 200, result);
            });
        } catch (err) {
            this.#setResponse(res, 403, {message: "Bad request"});
        }
    }

    async clearAll(req, res) {
        const userID = req.user.userId;
        try {
            const queryClearAll = `DELETE FROM persons WHERE user_id = '${userID}'`;
            const queryAll = `SELECT * FROM persons WHERE user_id = '${userID}'`;
            await this.connection.query(queryClearAll);
            this.connection.query(queryAll, (err, result) => {
                this.#setResponse(res, 200, result);
            });
        } catch (err) {
            this.#setResponse(res, 403, {message: "Bad request"});
        }
    }

    #setResponse = (res, status, message) => {
        return res.status(status).json({
            message
        });
    }
}
const persons = new MySql()

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
