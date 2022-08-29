const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')
console.log(first,second);

console.log('start')
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)

const result = readFileSync('./content/result-sync.txt', 'utf8')
console.log(result)
console.log('done with this task')
console.log('starting the next one')

// { flag: 'a' } is used to append to the file,if not overwrites the file