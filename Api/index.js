const app = require('./app.js')
const http = require('http')

const server = http.createServer(app)

server.listen(3003, () => {
  console.log('Server up on the port 3003')
})
