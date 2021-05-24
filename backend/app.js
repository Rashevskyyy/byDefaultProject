const enableMysql =  require("./databases/mySqlConnector.js")
const enableNeo4j =  require("./databases/neo4jConnector")
const start =  require("./databases/mongoDb")
const express = require('express');
const config = require('config')
const registration = require('./registration')
const login = require('./login')
const {Schema, model, Types} = require('mongoose')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/login', login)
app.use('/registration', registration)

const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

start()
enableMysql()
enableNeo4j()

