const fs = require('fs')
const path = require('path')

module.exports = (url, extension, callback) => {
  fs.readdir(url, (err, data) => {
    if (err) {
      return callback(err)
    } else {
      let filteredList = data.filter(item => {
        return path.extname(item) === '.' + extension
      })
      callback(null, filteredList)
    }
  })
}