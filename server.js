const express = require('express');

const app = express();
const PORT = 81;

app.use('/', express.static('public'))
app.use('/images', express.static('images'))


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})