const express = require('express');

const app = express();
const PORT = 81;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})