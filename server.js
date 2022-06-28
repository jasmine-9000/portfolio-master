const express = require('express');

const app = express();
const PORT = 80;

app.use('/', express.static(__dirname + '/public'))
app.use('/images', express.static(__dirname + '/images'))
app.use('/graphik-font-family', express.static(__dirname + '/graphik-font-family'))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})