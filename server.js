const express = require('express');

const app = express();
const PORT = 80;

app.use('/', express.static(__dirname + '/public'))
app.use('/images', express.static(__dirname + '/images'))
app.use('/graphik-font-family', express.static(__dirname + '/graphik-font-family'))

app.set('view engine', 'ejs');

app.get('/contact', (req, res) => {
    res.render(__dirname + '/views/contact.ejs');
    //res.sendFile(__dirname + '/public/contact.html');
})
app.get('/', (req, res) => {
    res.render(__dirname + '/views/sales.ejs');
})
app.get('/oldhome', (req, res) => {
    res.render(__dirname + '/views/oldhome.ejs');
})
const cards = [
    {
        title: "Four card feature",
        subtitle: "This is a frontendmentor.io challenge."
    },
    {
        title: "Coding boot camp",
        subtitle: "this is a boot camp sales page from frontendmentor.io"
    }

]
app.get('/portfolio', (req, res) => {
    res.render(__dirname + '/views/portfolio.ejs', {cards: cards });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})