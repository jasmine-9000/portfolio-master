const DEBUG = true;
    
class Card  {
    constructor(fronttext, backtext, themecolor=null, thumbnailURL=null) {
        this.fronttext = fronttext;
        this.backtext = backtext;
        this.themecolor = themecolor;
        this.thumbnailURL = thumbnailURL;
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
        thecard.appendChild(thefront)
        thecard.appendChild(theback)
        parentElement.appendChild(thecard);
        return parentElement;
    }
}
window.onload = () => {

    let newCard = new Card("Someone else's cat", "u/AC_Strand on Reddit", "pink", "./images/cat_1.jpg");

    let nextCard = new Card("Photo", "Photo by <a href='https://unsplash.com/@roiboscht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Stephan H.</a> on <a href='https://unsplash.com/s/photos/thistle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>",
        "pink", "./images/marigold-unsplash.jpg");
    let newCardDiv = newCard.render();
    let nextCardDiv = nextCard.render();
    let a = Array.from(document.querySelector('.cardgrid'));

    document.querySelector('.cardgrid').insertBefore(newCardDiv, undefined);
    document.querySelector('.cardgrid').insertBefore(nextCardDiv, undefined);
}