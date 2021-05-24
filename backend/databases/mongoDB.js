const mongoose = require('mongoose');
const config = require('config')

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

module.exports = start