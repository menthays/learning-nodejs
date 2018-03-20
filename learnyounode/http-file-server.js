const http = require('http')
const fs = require('fs')

let args = process.argv.slice(2)
let [port, filepath] = [args[0], args[1]]

let server = http.createServer((req, res) => {
  let file = fs.createReadStream(filepath)
  file.pipe(res)
})
server.listen(port)