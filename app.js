const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondcard;



function flipcard(){
    if( lockBoard) return
    if (this === firstCard) return;

    this.classList.toggle('flip')

if (!hasFlippedCard){
        //1st click
    hasFlippedCard=true;
    firstCard = this;
    return;
} 
    // console.log({firstCard, secondcard});
    
    // console.log(firstCard.dataset.framwork);
    // console.log(secondcard.dataset.framwork);
    //console.log('function was right')
 else{
    // hasFlippedCard = false;
    secondcard = this;

    checkForMatch();
}

// console.log('i was clicked');
// console.log(this);
}
function checkForMatch(){
    let isMatch = firstCard.dataset.framwork == secondcard.dataset.framwork;
    isMatch ? disableCards() : unflipcards();
    // do cards match?
    // if () { 
    //     console.log( firstCard, secondcard)
    //     disableCards();  
    // } else {
    //     unflipcards()
    //  }
    

}
function disableCards(){
      //its a match 
      firstCard.removeEventListener('click', flipcard);
      secondcard.removeEventListener('click', flipcard);
      resetboard();

}
function unflipcards(){
    lockBoard = true;
 // not a match
 setTimeout(()=>{
    firstCard.classList.remove('flip');
    secondcard.classList.remove('flip');
    // lockBoard = false;
    resetboard();
     }, 1500);
     
}
function resetboard(){
    [hasFlippedCard, lockBoard]= [false, false];
    [firstCard, secondcard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor( Math.rondom () * 12)
        card.computedStyleMap.order = randomPos;
    });
})();
cards.forEach(cards => cards.addEventListener('click', flipcard));