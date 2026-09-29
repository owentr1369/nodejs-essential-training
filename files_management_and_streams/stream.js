const fs = require('fs')

let streams = fs.createReadStream('./chat-logs/current-chat.log', 'utf-8')

let data = ""
streams.once('data', chunk => {
    console.log('read stream started')
    console.log('=====')
    console.log(chunk)
})

streams.on('data', chunk => {
    console.log(`chunk: ${chunk.length}`)
    data += chunk
})

streams.on('end', () => console.log(`Finished ${data.length}`))

console.log('Reading the file')