const http = require('http')
const url = require('url')

let args = process.argv.slice(2)
let port = args[0]

let server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let info = url.parse(req.url, true)
    let pathname = info.pathname
    let query = info.query
    let iso = query.iso
    let date = new Date(iso)
    if (pathname === '/api/unixtime') {
      res.end(JSON.stringify({
        'unixtime': date.getTime()
      }))
    } else if (pathname === '/api/parsetime') {
      res.end(JSON.stringify({
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
      }))
    } else {
      throw URIError('404')
    }
    res.end(info)
  }
})
server.listen(port)