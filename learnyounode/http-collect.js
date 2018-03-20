const http = require('http')
const bl = require('bl')

let args = process.argv.slice(2)
let url = args[0]

http.get(url, (response) => {
  // response.setEncoding('utf8')
  response.pipe(bl((err, data) => {
    console.log(data.length)
    console.log(data.toString())
  }))
})