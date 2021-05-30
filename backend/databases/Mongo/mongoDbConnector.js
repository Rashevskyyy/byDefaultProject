const mongoose = require('mongoose');
const express = require("express");
const route = express.Router();
const authToken = require('../../tokenverify')
const { Schema, model } = require('mongoose');

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
    }
}, { collection: 'person' });
const PersonSchema = model('Person', schema);
class Mongo {
    constructor(Person) {
        this.Person = Person;
    }

    getPerson = async (req, res) => {
        try {
            const person = await PersonSchema.find({ user: req.user.userId });
            if (req.query.sort || req.query.sort !== '_id') {
                person.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
            }
            this.#setResponse(res, 200, person);
        }
        catch (e) {
            this.#setResponse(res, 403, {message: "Bad request"});
        }
    }

    setPerson = async (req, res) => {
        try {
            const person = new PersonSchema({ user: req.user.userId, ...req.body });
            await person.save();
            this.#setResponse(res, 200, "Created person");
        }
        catch (e) {
            this.#setResponse(res, 403, {message: "Bad request"});
        }
    }

    updatePerson = async (req, res) => {
        const userId = req.user.userId;
        try {
            await PersonSchema.findOneAndUpdate({ _id: req.query.id, user: userId }, { $set: { ...req.body } });
            const person = await PersonSchema.find({ user: req.user.userId });
            this.#setResponse(res, 200, person);
        }
        catch (e) {
            this.#setResponse(res, 400, {message: "Bad request"});
        }
    }

    deletePerson = async (req, res) => {
        try {
            if (req.query.id === 'all') {
                await PersonSchema.deleteMany({ user: req.user.userId });
                return this.#setResponse(res, 200, "Deleted");
            }
            await PersonSchema.findByIdAndDelete({ _id: req.query.id });
            const person = await PersonSchema.find({ user: req.user.userId });
            this.#setResponse(res, 200, person);
        }
        catch {
            this.#setResponse(res, 403, {message: "Bad request"});
        }
    }

    #setResponse = (res, status, message) => {
        return res.status(status).json({
            message
        });
    }
};

const persons = new Mongo()

route.get("/",  authToken, (req, res, next) => {
    persons.getPerson(req, res)
});
route.post("/", authToken,  (req, res, next) => {
    persons.setPerson(req, res)
});
route.delete("/", authToken,  (req, res, next) => {
    persons.deletePerson(req, res)
});
route.put("/",  authToken, (req, res, next) => {
    persons.updatePerson(req, res)
});

module.exports = route;