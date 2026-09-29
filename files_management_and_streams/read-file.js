const fs = require('fs')
const path = require('path')

let sampleFile = fs.readFileSync(path.join(__dirname, 'readme.md'), "UTF-8")

console.log(sampleFile)
