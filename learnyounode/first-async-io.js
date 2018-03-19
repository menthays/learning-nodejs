const fs = require('fs')

let args = process.argv.slice(2)
let path = args[0]

let str = fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return false
  } else {
    console.log(data.split('\n').length-1)
  }
})