const fs = require('fs')
const path = require('path')

// fs.renameSync(path.join(__dirname, 'config.js'), path.join(__dirname, 'project-config.js'))
if (!fs.existsSync(path.join(__dirname, 'project-config.js'))) return console.log("It's already gone")

fs.unlink(path.join(__dirname, 'project-config.js'), err => {
    if (err) {
        throw err
    }
    else console.log("It's removed")
})