import express, { Router } from 'express';


class Server {
    #app
    #PORT
    #router
  
    constructor(PORT) {
      this.#PORT = PORT || 7070
      this.#app = express()
      this.#router = Router()
  
      const mySqlConnector = new MySQLConnector()
      this.#enableMySQLUsers(mySqlConnector)
      this.#enableSQL(mySqlConnector, 'mysql')
    }
  
    serve(func) {
      this.#app.use(express.json())
      this.#app.use(express.urlencoded({ extended: true }))
      this.#app.use(logger)    
      this.#app.use(this.#router)
  
      this.#app.listen(this.#PORT, func)
    }
}