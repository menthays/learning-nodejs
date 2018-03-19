let args = process.argv.slice(2)
let result = args.reduce((sum, current) => {
  return sum + Number(current)
}, 0)
console.log(result)