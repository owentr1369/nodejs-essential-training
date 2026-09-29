const fs = require('fs')
const path = require('path')

fs.renameSync(path.join(__dirname, 'config.js'), path.join(__dirname, 'project-config.js'))