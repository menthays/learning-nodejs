const http = require('http')
const bl = require('bl')

let args = process.argv.slice(2)
let port = args[0]

let server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    throw TypeError('Only support POST request!')
  } else {
    let data = ''
    req.on('data', chunk => data += chunk)
    req.on('end', () => {
      res.end(data.toUpperCase())
    })
  }
})
server.listen(port)