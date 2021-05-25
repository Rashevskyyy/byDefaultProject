var neo4j = require("neo4j-driver");
function enableNeo4j() {
    var login = 'neo4j'
    var pass = 'neo4j'
    var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic(login, pass))
    var session = driver.session()

    if (session) {
        console.log('Neo4j подключена')
    }
}

// //get  "MATCH (n) RETURN n") возвращает все ноды которые есть в базе
// session.run("MATCH (n:Person) RETURN n")
//    .then(function(result){
//      var persons = []
//      console.log(result.records[0]._fields[0].properties);
//      result.records.forEach(function(record){
//        record._fields[0].properties.phoneNumber = record._fields[0].properties.phoneNumber.low
//        record._fields[0].properties.userID = record._fields[0].properties.userID.low
//        record._fields[0].properties.age = record._fields[0].properties.age.low
//        var person = record._fields[0].properties
//        person.id = record._fields[0].identity.low
//        persons.push(person)
//      })
//         console.log(persons);
//
//        // post req Создает ноду с параметрами которые передались
//      session.run("CREATE (n:Person {firstName:'biba',lastName: 'boba', age: 22, city: 'shrekTown', phoneNumber: 123456, email: 'shrek@kek.com', companyName: 'qwerty', userID: 2})")
// // delete ноду
//     session.run("MATCH (n:Person {firstName:'biba'}) DETACH DELETE n")
//        // put req изменение ноды
//        session.run("MATCH (n) WHERE ID(n) = 24 SET n.firstname = 'artem'")

module.exports = enableNeo4j