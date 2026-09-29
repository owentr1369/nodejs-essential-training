const fs = require('fs')

// fs.renameSync('your-files-here', 'your-files-here-renamed')

if (!fs.existsSync('your-files-here-renamed')) return console.log("It's gone bro")

fs.rmdir('your-files-here-renamed', err => {
    if (err) throw err
    else console.log("Directory removed")
})