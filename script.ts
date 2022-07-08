const DEBUG = true;
    
class Card  {
    fronttext: string;
    backtext: string;
    themecolor: string;
    thumbnailURL: string;
    creditClass: Credits | null;
    constructor(fronttext:string, backtext:string, themecolor:string="black", thumbnailURL:string="./images/default.jpg", creditClass:Credits=new Credits("no credits plz fix") ) {
        this.fronttext = fronttext;
        this.backtext = backtext;
        this.themecolor = themecolor;
        this.thumbnailURL = thumbnailURL;
        this.creditClass = creditClass;
    }
    render() {
        let parentElement:HTMLDivElement = document.createElement('div');
        parentElement.classList.add('maincountainer');
        let thecard:HTMLDivElement = document.createElement('div'); // type; HTMLDivElement
        thecard.classList.add('thecard'); 
        let thefront:HTMLDivElement = document.createElement('div');
        thefront.textContent = this.fronttext;
        thefront.classList.add('thefront');
        let theback:HTMLDivElement = document.createElement('div');
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
            theback.style.backgroundSize = 'cover';
            theback.style.backgroundRepeat = 'no-repeat';
            console.log(theback);
        }
        // put all credits logic in a separate class.
        if(this.creditClass !== null) {
            theback.appendChild(this.creditClass.render());
        }
    

        thecard.appendChild(thefront)
        thecard.appendChild(theback)
        parentElement.appendChild(thecard);
        // ap
        parentElement.addEventListener('click', () => {
            console.log(parentElement);
            thecard.classList.toggle('flipped')
        });
        return parentElement;
    }
}

window.onload = () => {

    let newCard = new Card("Someone else's cat", "", "pink", "./images/cat_1.jpg",
                            new Credits("u/AC_Strand on Reddit", "white")
                        );
    let nextCard = new Card("Photo", ",",
        "pink", "./images/marigold-unsplash.jpg", 
        new Credits("Photo by <a href='https://unsplash.com/@jkiwi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>J K</a> on <a href='https://unsplash.com/photos/2j8X-RpB1sM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>", 
            "hsl(20, 80%, 100%")
        );
    let card1 = new Card("Thistle Branch", "Thistle Branch", "#cccccc", "./images/stephan-h-thistle-unsplash.jpg", 
        new Credits("Photo by <a href='https://unsplash.com/@roiboscht?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Stephan H.</a> on <a href='https://unsplash.com/s/photos/thistle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"))
    


    let newCardDiv:HTMLElement = newCard.render();
    let nextCardDiv:HTMLElement = nextCard.render();
    let card1Div:HTMLElement = card1.render();
    // let a = Array.from(document.querySelector('.cardgrid'));


    document.querySelector('.cardgrid')?.insertBefore(newCardDiv, null);
    document.querySelector('.cardgrid')?.insertBefore(nextCardDiv, null);
    document.querySelector('.cardgrid')?.insertBefore(card1Div, null);
}

class Credits 
{
    creditsHTML: string;
    creditsColor: string;
    dummydiv: HTMLElement;
    creditsElement: HTMLElement | null;
    public static bar<T>(x: T): T | null {
        if(x === null) {
            return null;
        }
        return null;
    }
    constructor(creditsHTML, creditsColor='black'){
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