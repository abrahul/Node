const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
//__dirname gives the directory the script is located

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)