const DEBUG = true;
    
class Card  {
    constructor(fronttext, backtext, themecolor=null, thumbnailURL=null, creditClass=null) {
        this.fronttext = fronttext;
        this.backtext = backtext;
        this.themecolor = themecolor;
        this.thumbnailURL = thumbnailURL;
        this.creditClass = creditClass;
    }
    render() {
        let parentElement = document.createElement('div');
        parentElement.classList.add('maincountainer');
        let thecard = document.createElement('div'); // type; HTMLDivElement
        thecard.classList.add('thecard'); 
        let thefront = document.createElement('div');
        thefront.textContent = this.fronttext;
        thefront.classList.add('thefront');
        let theback = document.createElement('div');
        if(this.backtext.includes('<a href=')) {
            theback.innerHTML = this.backtext;
        } else {
        theback.textContent = this.backtext;
        }
        theback.classList.add('theback');
        if(this.themecolor !== "" && this.themecolor !== null) {
            thefront.style.backgroundColor = this.themecolor;
        }
        if(this.thumbnailURL !== "" && this.thumbnailURL !== null) {
            if(DEBUG) {
                console.log(this.thumbnailURL);
            }
            theback.style.backgroundImage = `url('${this.thumbnailURL}'`;
            theback.style.backgroundSize = 'contain';
            console.log(theback);
        }
        if(this.creditClass !== null) {
            theback.appendChild(this.creditClass.render());
        }
    

        thecard.appendChild(thefront)
        thecard.appendChild(theback)
        parentElement.appendChild(thecard);
        return parentElement;
    }
}

window.onload = () => {

    let newCard = new Card("Someone else's cat", "u/AC_Strand on Reddit", "pink", "./images/cat_1.jpg");

    let nextCard = new Card("Photo", ",",
        "pink", "./images/marigold-unsplash.jpg", 
        new Credits("Photo by <a href='https://unsplash.com/@roiboscht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Stephan H.</a> on <a href='https://unsplash.com/s/photos/thistle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>", 
                "hsl(20, 80%, 100%"));
    let newCardDiv = newCard.render();
    let nextCardDiv = nextCard.render();
    let a = Array.from(document.querySelector('.cardgrid'));

    document.querySelector('.cardgrid').insertBefore(newCardDiv, undefined);
    document.querySelector('.cardgrid').insertBefore(nextCardDiv, undefined);
}

class Credits 
{
    constructor(creditsHTML, creditsColor='black') {
        this.creditsHTML = creditsHTML;
        this.creditsColor = creditsColor;
        this.dummydiv = document.createElement('div');

    }
    render() {
        if(this.creditsElement) {
            return this.creditsElement;
        }
        if(this.creditsHTML === null || this.creditsHTML === "") {
            return this.dummydiv;
        }
        let creditsElement = document.createElement('div');
        creditsElement.classList.add('img_credits');
        creditsElement.innerHTML = this.creditsHTML;
        creditsElement.style.color = this.creditsColor;
        this.creditsElement = creditsElement;
        return this.creditsElement;
    }
}