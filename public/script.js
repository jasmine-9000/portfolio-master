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
            theback.textContent = this.backtext;
            theback.classList.add('theback');
            if(this.themecolor !== "" && this.themecolor !== null) {
                thefront.style.backgroundColor = this.themecolor;
            }
            if(this.thumbnailURL !== "" && this.thumbnailURL !== null) {
                theback.style.backgroundImage = this.thumbnailURL;
            }
            thecard.appendChild(thefront)
            thecard.appendChild(theback)
            parentElement.appendChild(thecard);
            return parentElement;
        }
    }
    window.onload = () => {

        let newCard = new Card("1", "2", "pink", "");
        let newCardDiv = newCard.render();
        let a = Array.from(document.querySelectorAll('div')).pop();

        document.querySelector('p').insertBefore(newCardDiv, undefined);
    }