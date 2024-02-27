# Microservice Usage Guide

## Step 1: Ensure you have Pre-requisites
Make sure that Node.js and npm are installed on your system.

## Step 2: Clone Repository
Navigate to the project directory: cd cs361microservice

## Step 3: Install all dependencies using
npm install

## Step 4: Start Microservice 
npm start

## Step 5/6: Example call and recieve
```
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

  // Receive Incoming message
  ws.on('message', function incoming(message) {
    console.log('Dice rolled: %s', message)
  })
  
})
```

## Step 6 
All done! 

## UML
<img width="632" alt="Screen Shot 2024-02-26 at 4 30 59 PM" src="https://github.com/lymaii/cs361microservice/assets/134333201/e8095bdd-bd28-4259-87f2-626dae0d07c5">



