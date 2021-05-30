const neo4j = require("neo4j-driver");
const express = require("express");
const authToken = require('../../tokenverify')
const route = express.Router();
var driver = neo4j.driver("bolt://localhost")

function getRequest (req, res) {
    let persons = [];
    const userID = req.user.userId;
    let session = driver.session()
    session.run(`MATCH (n:Person) WHERE n.user_id = '${userID}' RETURN n`)
        .then(function (result) {
            result.records.forEach(function (record) {
                let person = record._fields[0].properties
                person.id = record._fields[0].identity.low
                persons.push(person)
            });
            return res.status(200).json({ message: persons });
        }).then(() => session.close())
        .catch((error) => {
            session.close();
            res.status(400).json({ message: "Bad request" })
            console.log(error)
        })
}

function create(req, res) {
    var session = driver.session();
    var person = req.body
    const userID = req.user.userId;
    session.run(`CREATE (n:Person {fName:'${person.fName}',lName: '${person.lName}', age:'${person.age}', city:'${person.city}', phoneNumber: '${person.phoneNumber}', email: '${person.email}', companyName: '${person.companyName}', user_id: '${userID}'})`).catch(err=>{
        console.log(err)
    return res.status(400).json({ message: "Bad request" })
    })
        .then((data)=>{
            console.log(data)
        session.close()
            return res.status(200).json({ message: "Created person" });
    })

}

function deleteReq(req, res) {

    var session = driver.session();
    const userId = req.user.userId;
    const id = req.query.id;
        if (req.query.id === 'all') {
            session.run(`MATCH (n:Person) WHERE n.user_id = '${userId}' DETACH DELETE n`).catch(err=>{
                console.log(err)
                return res.status(400).json({ message: "Bad request" });
            })
                .then(()=>{
                    session.close()
                    return res.status(200).json({ message: "Deleted" });
                })
            return;
        }
    session.run(`MATCH (n:Person) WHERE n.user_id = '${userId}' AND id(n) = ${id} DETACH DELETE n`).catch(err=>{
        console.log(err)
        return res.status(400).json({ message: "Bad request" });
    })
        .then(()=>{
            session.close()
            return res.status(200).json({ message: "Deleted" });
        })
}

function updateById(req, res) {
    var session = driver.session();
    const newField = req.body;
    const userId = req.user.userId;
    const id = req.query.id;
    const key = Object.keys(newField)[0]
    session.run(`MATCH (n:Person) WHERE n.user_id = '${userId} AND id(n) = ${id} SET n.${key} = '${newField[key]}'`).catch(err=>{
        console.log(err)
        return res.status(400).json({ message: "Bad request" });
    })
        .then(()=>{
            session.close()
            return res.status(200).json({ message: "Changed" });
        })
}

route.get("/", authToken, (req, res) => {
    getRequest(req, res)
});
route.post("/", authToken,  (req, res ) => {
    create(req, res)
});
route.delete("/", authToken,  (req, res ) => {
    deleteReq(req, res)
});
route.put("/",  authToken, (req, res) => {
    updateById(req, res)
});

module.exports = route