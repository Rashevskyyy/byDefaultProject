const express = require("express");
const mySql = require("mysql");
// const validation = require("../../../validation/validation");
const path = require('path');
const {
    postQuery,
    getQuery,
    deleteQuery,
    putQuery,
} = require("../queryHelper");

const connection = mySql.createConnection({
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

const route = express.Router();

route.get("/", (req, res, next) => {
    try {
        // const flag = validation(req, res, next);
        // if (flag) {
            connection.query(getQuery(req), (err, result) => {
                if (err) {
                    return res.status(400).json({ message: "something wrong" });
                }
                return res.status(200).json(result);
            });
        // }
    } catch (e) {
        return res.status(400).json({ message: "something wrong" });
    }
});
route.post("/", (req, res, next) => {
    try {
        // const flag = validation(req, res, next);
        // if (flag) {
        console.log(postQuery(req))
            connection.query(postQuery(req), (err, result) => {
                if (err) return res.status(400).json({ message: "something wrong" });
                else return res.status(200).json({ message: "accept" });
            });
        // }
    } catch (e) {
        return res.status(400).json({ message: "something wrong" });
    }
});
route.delete("/", (req, res, next) => {
    try {
        // const flag = validation(req, res, next);
        // if (flag) {
            connection.query(deleteQuery(req), (err, result) => {
                if (err) {
                    return res.status(400).json({ message: "something wrong" });
                }
                res.status(200).json({ message: "done" });
            });
        // }
    } catch (e) {
        res.status(401).json({ message: "not auth" });
    }
});
route.put("/", (req, res, next) => {
    try {
        // const flag = validation(req, res, next);
        // if (flag) {
            connection.query(putQuery(req), (err, result) => {
                if (err) {
                    return res.status(400).json({ message: "something wrong" });
                } else res.status(200).json({ message: "done" });
            });
        // }
    } catch (e) {
        return res.status(400).json({ message: "something wrong" });
    }
});

module.exports = route;
