const fs = require('fs')

const files = fs.readdir('./', function (err, files) {
    if (err) {
        throw err
    }
    else {
        console.log(files)
    }
})

console.log('Reading files...')