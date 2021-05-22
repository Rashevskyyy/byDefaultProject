const MongoClient = require("byDefaultProject/backend/databases/mongoDB").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("persons");
    let person = {
        name: "Tom",
        age: 23};
    collection.insertOne(person, function(err, result){

        if(err){
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });
});