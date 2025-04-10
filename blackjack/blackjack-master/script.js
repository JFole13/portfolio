startGame()

function startGame() {

    updateBankroll()
    
    updateWins()
    
    setLastCardsToDefault()

    updateBet()
    
    toggleBetDownButton()

    addPlayerCard(generateCard())
    addPlayerCard(generateCard())


    setFirstTwoPlayerCardsDisplayToNone()

    changeSourceOfFirstTwoPlayerCards()

    addDealerCard(generateCard())
    addDealerCard(generateCard())

    document.getElementById('dealer-card-3').src = 'cards/PNG/gray_back.png'
    document.getElementById('dealer-card-3').style.display = 'none'
    document.getElementById('dealer-card-4').style.display = 'none'
    document.getElementById('dealer-card-3-flipped').src = 'cards/PNG/' + dealerCards[0].title + '.png'
    document.getElementById('dealer-card-4').src = 'cards/PNG/' + dealerCards[1].title + '.png'

    placeFirstBet()
}

function generateCard(){

    // gets random card
    const newCardTitle = cardTitles[Math.floor(Math.random() * cardTitles.length)]

    // gets value of card
    let newCardValue
    const firstChar = newCardTitle.substring(0,1)

    if(firstChar == '1' || firstChar == 'J'|| firstChar == 'Q' || firstChar == 'K'){
        newCardValue = 10;
    }else if(firstChar == 'A'){
        newCardValue = 11;
    }else{
        newCardValue = parseInt(firstChar)
    }

    // adds to used deck
    usedCardTitles.push(newCardTitle)

    // takes card out from deck
    cardTitles.splice(cardTitles.indexOf(newCardTitle), 1)


    const card = {
        title: newCardTitle,
        value: newCardValue
    }

    return card
}

function addDealerCard(card){
    dealerCards.push(card)
}

function addPlayerCard(card){
    playerCards.push(card)
}

function getCardTotal(cards){
    let count = 0
    for(let i = 0; i < cards.length; i++){
        count += cards[i].value
    }

    return count
}

function placeFirstBet(){

    toggleActionButton2()
    document.getElementById('action-btn-2').textContent = 'Place Bet'

    document.getElementById('bet-up').addEventListener('click', function(){
        if(document.getElementById('bet-down').classList.contains('disabled')){
            toggleBetDownButton()
        }

        if(bet < bankroll - 1){
            bet++
            updateBet()
        }else{
            bet++
            updateBet()
            toggleBetUpButton()
        }
    })
        
    document.getElementById('bet-down').addEventListener('click', function(){
        if(document.getElementById('bet-up').classList.contains('disabled')){
            toggleBetUpButton()
        }

        if(bet > 2){
            bet--
            updateBet()
        }else{
            bet--
            updateBet()
            toggleBetDownButton()
        }
    })

    // stand procedure
    document.getElementById('action-btn-2').onclick = function(){
        document.getElementById('bet-up').classList.add('disabled')
        document.getElementById('bet-down').classList.add('disabled')
        toggleActionButton2()

        bankroll -= bet
        updateBankroll()
    
        displayFirstFourCards()

        if(checkForPlayerHas21()){
            document.getElementById('title').style.animationIterationCount = 1
            establishTimer()
        }else{
            payInsurance()
        }
    }
}

function placeFurtherBet(){

    // stand procedure
    document.getElementById('action-btn-2').onclick = function(){

        document.getElementById('last-player-card-1').style.display = 'flex'
        document.getElementById('last-player-card-2').style.display = 'flex'
        document.getElementById('last-dealer-card-1').style.display = 'flex'
        document.getElementById('last-dealer-card-2').style.display = 'flex'

        document.getElementById('bet-up').classList.add('disabled')
        document.getElementById('bet-down').classList.add('disabled')
        toggleActionButton2()

        bankroll -= bet
        updateBankroll()
    
        document.querySelector('.inner').style.opacity = 1
       
        displayFirstFourCards()

        if(checkForPlayerHas21()){
            document.getElementById('title').style.animationIterationCount = 1
            establishTimer()
        }else{
            payInsurance()
        }
    }
}

function checkForPlayerHas21(){
    return (getCardTotal(playerCards) == 21 ? true : false)
}

function checkForDealerHas21(){
    return (getCardTotal(dealerCards) == 21 ? true : false)
}

function payInsurance(){

    if(dealerCards[1].value == 11 && bet <= bankroll){
        toggleActionButton1()
        document.getElementById('action-btn-1').textContent = 'Pay Insurance?'
        document.getElementById('action-btn-1').onclick = function(){
            
        }
        toggleActionButton2()
        document.getElementById('action-btn-2').textContent = 'Yes'
        document.getElementById('action-btn-2').onclick = function(){
            isInsurancePaid = true;
            bankroll -= Math.round(bet / 2)
            updateBankroll()
            checkInsurance()
        }

        toggleActionButton3()
        document.getElementById('action-btn-3').textContent = 'No'
        document.getElementById('action-btn-3').onclick = function(){
            checkInsurance()
        }
    }else{
        startHand()
    }

}



function checkInsurance(){
    
    toggleActionButton1()
    toggleActionButton2()
    toggleActionButton3()

    if(checkForDealerHas21()){
        
        document.querySelector('.inner').style.transform = 'rotateY(180deg)'
        
        if(isInsurancePaid){
            bankroll += bet
        }

        updateBankroll()
        establishTimer()
    }else{
        updateBankroll()
        startHand()
    }
}

function startHand(){

    toggleActionButton1()
    toggleActionButton2()

    //checks to see if player can afford to double down
    if(bankroll - bet >= 0){
        toggleActionButton3()
    }

    document.getElementById('action-btn-1').textContent = 'Stand'
    document.getElementById('action-btn-2').textContent = 'Hit'
    document.getElementById('action-btn-3').textContent = 'Double Down'

    if(getCardTotal(playerCards) == 22){
        playerCards[0].value = 1;
    }

    document.getElementById('action-btn-1').onclick = function(){
        stand()
    }

    document.getElementById('action-btn-2').onclick = function(){
        hitCounter++

        hit()

        if(hitCounter == 4 ||checkBust()) {
            toggleActionButton1()
            document.getElementById('action-btn-3').classList.add('disabled')
            establishTimer()
            toggleActionButton2()
        }
    }

    document.getElementById('action-btn-3').onclick = function(){
        doubleDown()
    }
}

function checkBust() {
    return getCardTotal(playerCards) > 21 ? true : false
}

function hit(){
    
    addPlayerCard(generateCard())

    if(getCardTotal(playerCards) > 21){
        for(let i = 0; i < playerCards.length; i++){
            if(playerCards[i].value == 11){
                playerCards[i].value = 1
                break
            }
        }
    }
    
    document.querySelector('.player-card-' + (hitCounter + 1) + '-container').style.display = 'flex'
    document.getElementById('player-card-' + (hitCounter + 1)).src = 'cards/PNG/' + playerCards[hitCounter].title + '.png'
    document.getElementById('action-btn-3').classList.add('disabled')
}

function doubleDown(){

    if(!checkForPlayerHas21()){
        document.getElementById('action-btn-1').classList.add('disabled')
        document.getElementById('action-btn-2').classList.add('disabled')
        document.getElementById('action-btn-3').classList.add('disabled')
        addPlayerCard(generateCard())
        document.querySelector('.player-card-3-container').style.display = 'flex'
        document.getElementById('player-card-3').src = 'cards/PNG/' + playerCards[2].title + '.png'
        bankroll -= bet
        bet *= 2
        updateBet()
        updateBankroll()
        dealerDraw()
    }else{
        dealerDraw()
    }
}

function stand(){

    toggleActionButton1()
    document.getElementById('action-btn-2').classList.add('disabled')
    document.getElementById('action-btn-3').classList.add('disabled')
    dealerDraw()
}

function dealerDraw(){

    //array to deal with dealer card divs
    const dealerOrder = [5,6,2,1]
    
    document.querySelector('.inner').style.transform = 'rotateY(180deg)'
    
    //dealerOrder counter
    let counter = 0
    
    //dealerCards counter
    let cardsCounter = 2

    if(getCardTotal(dealerCards) == 22){
        dealerCards[0].value = 1
    }

    if(getCardTotal(dealerCards) != 21){
        for(let i = 0; i < dealerCards.length; i++){
            if(dealerCards[i].value == 11){
                dealerCards[i].value = 1
            }
        }
    }

    while(getCardTotal(dealerCards) < 17){
            addDealerCard(generateCard())
            document.getElementById('dealer-card-' + dealerOrder[counter]).src =  'cards/PNG/' + dealerCards[cardsCounter].title + '.png'
            
            if(dealerCards[cardsCounter].value == 11){
                dealerCards[cardsCounter].value = 1
            }

            counter++
            cardsCounter++
    }

    if(dealerCards.length == 3){

        displayFifthDealerCard()
        endTimer = 1500
    }

    if(dealerCards.length == 4){

        displayFifthDealerCard()
        displaySixthDealerCard()
        endTimer = 2000
    }

    if(dealerCards.length == 5){

        displayFifthDealerCard()
        displaySixthDealerCard()
        displaySecondDealerCard()
        endTimer = 3000
    }

    if(dealerCards.length == 6){

        displayFifthDealerCard()
        displaySixthDealerCard()
        displaySecondDealerCard()
        displayFirstDealerCard()
        endTimer = 4000
    }

    establishTimer()
}

function endHand(){

    // outcome for player getting a blackjack  
    if(checkForPlayerHas21() && playerCards.length == 2){
        playerWins++
        bankroll += Math.round(bet * 1.5)
        updateBankroll()
        updateWins()
    }
    
    // outcome for player busting
    else if(getCardTotal(playerCards) > 21){
        dealerWins++
        updateWins()
    }

    // outcome for player having a higher total than the dealer
    else if(getCardTotal(playerCards) > getCardTotal(dealerCards) && getCardTotal(playerCards) <= 21){
        playerWins++
        bankroll += bet * 2
        updateBankroll()
        updateWins()
    }
    
    // outcome for dealer busting
    else if(getCardTotal(dealerCards) > 21 && getCardTotal(playerCards) <= 21){
        playerWins++
        bankroll += bet * 2
        updateBankroll()
        updateWins()
    }
    
    // outcome for a push
    else if(getCardTotal(dealerCards) == getCardTotal(playerCards)){
        bankroll += bet
        updateBankroll()
    }
    
    // outcome for dealer having a higher total than the player
    else if(getCardTotal(dealerCards) > getCardTotal(playerCards) && getCardTotal(dealerCards) <= 21){
        dealerWins++
        updateWins()
        
    }

    if(bankroll == 0){
        
        setFirstTwoPlayerCardsDisplayToNone()

        setLastThreePlayerCardsDisplayToNone()

        setDealerCardsAndLastCardsDisplayToNone()

        document.getElementById('action-btn-1').textContent = ''
        document.getElementById('action-btn-3').textContent = ''
        toggleActionButton2()
        document.getElementById('action-btn-2').textContent = 'Start Over'

        document.getElementById('action-btn-2').onclick = function() {
            newGame = true
            bankroll = 20;
            updateBankroll()
            dealerWins = 0
            playerWins = 0
            updateWins()
            toggleActionButton2()
            nextHand()   
        }
    }else{
        nextHand()
    }

}

function nextHand(){
    
    //reset the deck
    if(cardTitles.length < 11){
        cardTitles = cardTitles.concat(usedCardTitles)
        usedCardTitles = []
    }

    bet = 1
    updateBet()
    
    setFirstTwoPlayerCardsDisplayToNone()

    setLastThreePlayerCardsDisplayToNone()

    let lastPlayerCard1 = document.getElementById('player-card-1').src
    let lastPlayerCard2 = document.getElementById('player-card-2').src
    let lastDealerCard1 = document.getElementById('dealer-card-3-flipped').src
    let lastDealerCard2 = document.getElementById('dealer-card-4').src

    if(newGame){
        setLastCardsToDefault()
        newGame = false
    }else{
        document.getElementById('last-player-card-1').src = lastPlayerCard1
        document.getElementById('last-player-card-2').src = lastPlayerCard2
        document.getElementById('last-dealer-card-1').src = lastDealerCard1
        document.getElementById('last-dealer-card-2').src = lastDealerCard2
        }
    

    setDealerCardsAndLastCardsDisplayToNone()

    document.getElementById('dealer-card-5').style.opacity = 0
    document.getElementById('dealer-card-6').style.opacity = 0
    document.getElementById('dealer-card-1').style.opacity = 0
    document.getElementById('dealer-card-2').style.opacity = 0

    
    isInsurancePaid = false

    dealerCards.splice(0, dealerCards.length)

    playerCards.splice(0, playerCards.length)

    addPlayerCard(generateCard())
    addPlayerCard(generateCard())

    changeSourceOfFirstTwoPlayerCards()

    document.getElementById('action-btn-1').textContent = ""
    document.getElementById('action-btn-3').textContent = ""

    addDealerCard(generateCard())
    addDealerCard(generateCard())

    document.getElementById('dealer-card-3').src = 'cards/PNG/gray_back.png'
    document.getElementById('dealer-card-3-flipped').src = 'cards/PNG/' + dealerCards[0].title + '.png'
    document.getElementById('dealer-card-4').src = 'cards/PNG/' + dealerCards[1].title + '.png'

    if(bankroll > 1) {
        toggleBetUpButton()
    }
    

    toggleActionButton2()
    document.getElementById('action-btn-2').textContent = 'Place Bet'

    document.querySelector('.inner').style.opacity = 0
    document.querySelector('.inner').style.transform = 'none'
    
    hitCounter = 1

    placeFurtherBet()
}