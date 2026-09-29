const fs = require('fs')

if (fs.existsSync('your-files-here')) {
    return console.log('Already there')
}

fs.mkdir('your-files-here', err => {
    if (err) console.log(`ERR: `, err)
    else console.log('Directory created')
})