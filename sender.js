const WebSocket = require('ws')
const port = 8080

// Set up server
const wss = new WebSocket.Server({ port: port })

// Wire up some logic for the connection event (when a client connects) 
wss.on('connection', function connection(ws) {
  // Wire up logic for the message event (when a client sends something)
  console.log('Server connected')

  const diceSize = 6
  // Send a message
  ws.send(JSON.stringify({dice: diceSize}))

  ws.on('message', function incoming(message) {
    console.log('Dice rolled: %s', message)
  })
  
})
