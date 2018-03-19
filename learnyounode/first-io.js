const fs = require('fs')

let args = process.argv.slice(2)
let path = args[0]

let str = fs.readFileSync(path).toString()
console.log(str.split('\n').length-1)