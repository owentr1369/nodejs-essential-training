const fs = require('fs')

let md = `# Sample 
## This is sample markdown content for writing a file
`

fs.writeFile('testing.md', md.trim(), () => {
    console.log('Markdown created')
})