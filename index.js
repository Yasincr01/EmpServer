const jsonServer = require('json-server')


// create server
const empServer = jsonServer.create()
// set path for db.json
const router = jsonServer.router("db.json")
// create middleware 
const middleware = jsonServer.defaults()
// define a port for running json server
const PORT = 3000 || process.env.PORT

// use middleware.router
empServer.use(middleware)
empServer.use(router)

// run server in given port  to resolve client request
empServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and waiting for client request!!!`)
})