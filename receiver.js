const WebSocket = require('ws')
const port = 8080

// Create WebSocket connection.
const socket = new WebSocket(`ws://localhost:${port}`)

// Listen for messages
socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data)
    const number = data.dice
    const roll = Math.floor(Math.random() * number) + 1
    socket.send(JSON.stringify({
        diceSize: number, 
        number: roll
    }))
})
