const express = require("express");
const Person = require("../models/Person");
let mongoDB = express.Router();

mongoDB.get("/", async (req, res, next) => {
    let persons = await Person.find({ USER_ID: req.query.id });
    const regExFN = new RegExp(`${req.query.findFirstName}`, "i"); // regEx - по имени  без учета регистра
    const regExLN = new RegExp(`${req.query.findLastName}`, "i"); // regEx - по фамилии без учета регистра
    persons = persons.sort((a, b) => {
        const x = a[req.query.sort];
        const y = b[req.query.sort];
        return x < y ? -1 : x > y ? 1 : 0;
    });
    if (!req.query.findFirstName && !req.query.findLastName) {
        return res.status(200).json(persons);
    } else if (req.query.findFirstName && !req.query.findLastName) {
        persons = persons.filter((el) => el.FIRSTNAME.match(regExFN));
        return res.status(200).json(persons);
    } else if (!req.query.findFirstName && req.query.findLastName) {
        persons = persons.filter((el) => el.LASTNAME.match(regExLN));
        return res.status(200).json(persons);
    } else if (req.query.findFirstName && req.query.findLastName) {
        persons = persons.filter(
            (el) => el.LASTNAME.match(regExLN) && el.FIRSTNAME.match(regExFN)
        );
        return res.status(200).json(persons);
    } else return res.status(401).json({ message: "not auth" });
});