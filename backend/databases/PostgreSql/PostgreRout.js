const express = require("express");
const pg = require("pg");
const route = express.Router();
const authToken = require('../../tokenverify')

class PostgreSql {
    constructor() {
        this.config = {
            host: 'localhost',
            user: 'postgres',
            password: 'root',
            database: 'projectdb',
            port: 5432,
            ssl: false,
        };
        this.client = new pg.Client(this.config);
            this.client.connect(err => {
                if (err) {
                    console.error('connection error', err.stack)
                } else {
                    console.log('PostgreSql подключена')
                }
            });

    }

    async getRequest(req, res) {
        try {
            const userID = req.user.userId;
            const queryAll = `SELECT * FROM persons WHERE user_id = '${userID}'`;
            const result = await this.client.query(queryAll);
            this.#setResponse(res, 200, result.rows);
        } catch (err) {
            this.#setResponse(res, 403, {message: "Что-то случилось"});
        }
    }

    async create(req, res) {
        try {
            const newField = req.body;
            const userID = req.user.userId;
            const queryAll = `SELECT * FROM persons WHERE user_id = '${userID}'`;
            const queryCreate = `INSERT INTO persons (id_user, "fName", "lName", age, city, phone, email, company) VALUES ('${userID}', '${newField.fName}', '${newField.lName}', ${newField.age}, '${newField.city}','${newField.phoneNumber}', '${newField.email}', '${newField.companyName}') RETURNING *`;
            await this.client.query(queryCreate);
            const result = await this.client.query(queryAll);
            this.#setResponse(res, 200, result.rows);
        } catch (err) {
            console.log(err);
            this.#setResponse(res, 403, {message: "Что-то случилось"});
        }
    }

    async updateById(req, res) {
        try {
            const newField = req.body;
            const userID = req.user.userId;
            const queryUpdate = `UPDATE persons SET "firstName" = '${newField.firstName}', "lastName" = '${newField.lastName}', age = ${newField.age}, city = '${newField.city}', phone = '${newField.phone}', email = '${newField.email}', company = '${newField.company}' WHERE id_user = '${userID}' AND id = ${newField.id};`;
            await this.client.query(queryUpdate);
            const result = await this.client.query(`SELECT * FROM persons WHERE user_id = '${userID}'`);
            this.#setResponse(res, 200, result.fields);
        } catch (err) {
            console.log(err);
            this.#setResponse(res, 403, {message: "Что-то случилось"});
        }
    }

    async delete(req, res) {
        const userID = req.user.userId;
        try {
            if (req.query.id === 'all') {
                return this.clearAll(req, res);
            }
            const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND user_id = '${userID}'`;
            await this.client.query(queryDelete);
            this.#setResponse(res, 200, {message: "Удалилось"});
        } catch (err) {
            this.#setResponse(res, 403, {message: "Что-то случилось"});
        }
    }

    async clearAll(req, res) {
        const userID = req.user.userId;
        try {
            const queryClearAll = `DELETE FROM persons WHERE id_user = '${userID}'`;
            await this.client.query(queryClearAll);
            this.#setResponse(res, 200, {message: "Удалилось"});
        } catch (err) {
            this.#setResponse(res, 403, {message: "Что-то случилось"});
        }
    }

    #setResponse = (res, status, message) => {
        return res.status(status).json({
            message
        });
    }
}
const persons = new PostgreSql()

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