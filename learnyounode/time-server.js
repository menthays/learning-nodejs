const net = require('net') 
const strftime = require('strftime')

let args = process.argv.slice(2)
let port = args[0]

const server = net.createServer(socket => {  
  // socket handling logic  
  socket.end(strftime('%F %R', new Date()) + '\n')
})  
server.listen(port) 