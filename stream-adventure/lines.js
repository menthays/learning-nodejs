let result = ''
process.stdin.on('readable', () => {
  let chunk = process.stdin.read()
  if(chunk) {
    result += chunk
  }
})

process.stdin.on('end', () => {
  let arr = result.toString().split('\n')
  for (let i=0; i<arr.length; i++) {
    arr[i] = i%2 === 0 ? arr[i].toLowerCase() : arr[i].toUpperCase()
  }
  process.stdout.write(arr.join('\n'))
})