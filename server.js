const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 80;

// express's body parser
app.use(express.urlencoded({extended: false}))

app.use('/', express.static(__dirname + '/public'))
app.use('/images', express.static(__dirname + '/images'))
app.use('/graphik-font-family', express.static(__dirname + '/graphik-font-family'))

app.set('view engine', 'ejs');

app.get('/contact', (req, res) => {
    res.render(__dirname + '/views/contact.ejs');
    //res.sendFile(__dirname + '/public/contact.html');
})
app.post('/contact', async (req, res) => {
    console.log(req.body);
    /*
    let testAccount = await nodemailer.createTestAccount(); 
    let transporter = nodemailer.createTransport({
        name: "ethereal.email",
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })
    let info = await transporter.sendMail({
        from: `wrkerr9@gmail.com`,
        to: "wrkerr9@gmail.com",
        subject: `Auto generated message from Localhost`,
        text: `${req.body.first_name} ${req.body.last_name} ${req.body.message} Website: ${req.body.website ? req.body.website : ""}`,
        html: `<p>${req.body.first_name} ${req.body.last_name} ${req.body.message} Website: ${req.body.website ? req.body.website : "n/a"}, Email: ${req.body.email ? req.body.email : "n/a"}</p>`
    })
    
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    */
    res.redirect('/')
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
        subtitle: "This is a sample four card feature pagefrom a frontendmentor.io challenge.",
        hyperlink: "https://www.frontendmentor.io",
        thumbnailsrc: "images/website_previews/four-card-feature-desktop-preview.jpg"
    },
    {
        title: "Coding boot camp",
        subtitle: "this is a boot camp sales page from frontendmentor.io",
        hyperlink: "https://www.frontendmentor.io",
        thumbnailsrc: "images/website_previews/coding-bootcamp-desktop-preview.jpg"
    },
    {
        title: "Fylo Data Storage",
        subtitle: "This is a sample data storage app from frontendmentor.io",
        hyperlink: "https://www.frontendmentor.io",
        thumbnailsrc: "images/website_previews/fylo-data-storage-desktop-preview.jpg"
    }, 
    {
        title: "No image sample card",
        subtitle: "ads;jklfdas;jklfads;kljadsfjkl;asdfj;klfdsaljk;dsfakjl;df",
        hyperlink: "https://google.com",
        thumbnailsrc: "n/a"
    }

]
app.get('/portfolio', (req, res) => {
    res.render(__dirname + '/views/portfolio.ejs', {cards: cards });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})