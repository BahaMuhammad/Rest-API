//inisiasi framework express
const express = require('express');

//inisialisasi port
const port = 4000

const app = express()

//membuat function get
app.get('/', function(req, res) {
    res 
        .send('Hello world')
})

//running server
app.listen(port, function() {
    console.log('Server Ready on port 4000')
})

