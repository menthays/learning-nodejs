const http = require('http')

let args = process.argv.slice(2)
let url = args[0]

http.get(url, (response) => {
  response.setEncoding('utf8')
  response.on('data', data => {
    console.log(data)
  })
})