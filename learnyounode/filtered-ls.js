const fs = require('fs')
const path = require('path')

let args = process.argv.slice(2)
let [url, ext] = [args[0], args[1]]

let str = fs.readdir(url, (err, list) => {
  if (err) {
    console.error(err)
  } else {
    let filteredList = list.filter(item => {
      return path.extname(item) === '.' + ext
    })
    console.log(filteredList.join('\n'))
  }
})