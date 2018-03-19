const filteredList = require('./filteredList')
const args = process.argv.slice(2)
filteredList(args[0], args[1], (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.join('\n'))
  }
})