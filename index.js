const express = require("express")
const app = express();
// const http = require('http')
// // const ios = io();

// app.listen(8000, () => { console.log("server started at 8000 port") }
// )
// app.use(express.static(__dirname + '/public'))
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })
const http = require('http').createServer(app)

const PORT = process.env.PORT || 8000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})



// -----------socket----------------
const io = require("socket.io")(http);
io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        console.log("msg--", msg)
        socket.broadcast.emit('message', msg)
    })

})