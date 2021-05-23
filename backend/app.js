const enableMysql =  require("./databases/mySqlConnector.js")
const enableNeo4j =  require("./databases/neo4jConnector")
const express = require('express');
const config = require('config')
const mongoose = require('mongoose');
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

async function start() {
    try {
    await mongoose.connect(config.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.on('open', function() {
          console.log('MongoDb are connected!')
        });

    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()


app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

enableMysql()
enableNeo4j()
