const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  const first = result
  readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(result)
        console.log('done with the task')

      }
    )
  })
})
console.log('starting next task')