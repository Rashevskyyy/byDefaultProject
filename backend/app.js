const start =  require("./databases/Mongo/mongoDB")
const express = require('express');
const config = require('config')
const registration = require('./registration')
const login = require('./login')
const {Schema, model, Types} = require('mongoose')
const neo4jDriver = require("neo4j-driver");
const cors = require('cors')
const mySql = require("./databases/mySql/mySqlRout");
const mongoDb = require("./databases/Mongo/mongoDbConnector");
const postgreDb = require("./databases/PostgreSql/PostgreRout");
const neo4j   = require("./databases/neo4j/neo4jConnector");
const sqlite3 = require('./databases/SQLite/SQLiteRout');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/login', login)
app.use('/registration', registration)
app.use('/mySql', mySql)
app.use('/mongoDb', mongoDb)
app.use('/postgreDb', postgreDb)
app.use('/neo4j', neo4j)
app.use('/sqlite3', sqlite3);

const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

start()

function enableNeo4j() {
    var login = 'neo4j'
    var pass = 'neo4j'
    driver = neo4jDriver.driver("bolt://localhost", neo4jDriver.auth.basic(login, pass))
    console.log("Neo4j подключена")
}
enableNeo4j()

