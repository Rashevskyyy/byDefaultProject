const enableNeo4j =  require("./databases/neo4j/neo4jConnector")
const start =  require("./databases/Mongo/mongoDB")
const express = require('express');
const config = require('config')
const registration = require('./registration')
const login = require('./login')
const {Schema, model, Types} = require('mongoose')
const cors = require('cors')
// const mySql = require("./databases/mySql/mySqlRout");
const mongoDb = require("./databases/Mongo/mongoDbConnector");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/login', login)
app.use('/registration', registration)
// app.use('/mySql', mySql)
app.use('/mongoDb', mongoDb)

const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

start()
enableNeo4j()

