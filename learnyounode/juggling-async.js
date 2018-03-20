const http = require('http')
const bl = require('bl')

let args = process.argv.slice(2)

const collect = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      // response.setEncoding('utf8')
      response.pipe(bl((err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data.toString())
        }
      }))
    })
  })
}

const jugglingAsync = async (arr) => {
  for (let i of arr) {
    await collect(i).then(res => console.log(res))
  }
}

jugglingAsync(args)


