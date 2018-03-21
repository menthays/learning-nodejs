/**
 * There is no need to include 'through2', go to Node.js API to learn more about stream event
 */
let result = ''
process.stdin.on('readable', () => {
  let chunk = process.stdin.read()
  if(chunk) {
    result += chunk
  }
})

process.stdin.on('end', () => {
  process.stdout.write(result.toString().toUpperCase())
})