const fs = require('fs')

let md = `# Sample 
## This is sample markdown content for writing a file
`

fs.writeFile('testing.md', md.trim(), (err) => {
    if (err) {
        throw err
    }
    fs.appendFileSync('testing.md', '\n\n## Node.js that people loved')
    console.log('Markdown created')
})