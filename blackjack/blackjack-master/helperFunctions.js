let cardTitles = ['2S','2C','2D','2H','3S','3C','3D','3H','4S','4C','4D','4H','5S','5C','5D','5H','6S','6C','6D','6H','7S','7C',
'7D','7H','8S','8C','8D','8H','9S','9C','9D','9H','10S','10C','10D','10H','JS','JC','JD','JH','QS','QC','QD','QH','KS','KC','KD','KH',
'AS','AC','AD','AH']

let usedCardTitles = []

let dealerCards = []

let playerCards = []

let bet = 1

let insuranceBet = 0

let bankroll = 20

let playerWins = 0

let dealerWins = 0

let hitCounter = 1

let isInsurancePaid = false;

let endTimer = 1000

let newGame = false

let two = {
    title: '2S',
    value: 2
}

let ace = {
    title: 'AS',
    value: 11
}

let king = {
    title: 'KS',
    value: 10
}

function updateBankroll() {
    document.getElementById('bankroll').textContent = `Total Bankroll: $${bankroll}`
}

function updateWins() {
    document.getElementById('stat-container-total-wins-text').textContent = `You: ${playerWins} / Dealer: ${dealerWins}`
}

function setLastCardsToDefault() {
    document.getElementById('last-player-card-1').src = 'cards/PNG/gray_back.png'
    document.getElementById('last-player-card-2').src = 'cards/PNG/gray_back.png'
    document.getElementById('last-dealer-card-1').src = 'cards/PNG/gray_back.png'
    document.getElementById('last-dealer-card-2').src = 'cards/PNG/gray_back.png'

}

function updateBet() {
    document.getElementById('bet-box-text').textContent = bet
}

function toggleBetUpButton() {
    document.getElementById('bet-up').classList.toggle('disabled')
}

function toggleBetDownButton() {
    document.getElementById('bet-down').classList.toggle('disabled')
}

function setFirstTwoPlayerCardsDisplayToNone() {
    document.getElementById('player-card-1').style.display = 'none'
    document.getElementById('player-card-2').style.display = 'none'
}

function setLastThreePlayerCardsDisplayToNone() {
    document.querySelector('.player-card-3-container').style.display = 'none'
    document.querySelector('.player-card-4-container').style.display = 'none'
    document.querySelector('.player-card-5-container').style.display = 'none'
}

function changeSourceOfFirstTwoPlayerCards() {
    document.getElementById('player-card-1').src = 'cards/PNG/' + playerCards[0].title + '.png'
    document.getElementById('player-card-2').src = 'cards/PNG/' + playerCards[1].title + '.png'
}

function toggleActionButton1() {
    document.getElementById('action-btn-1').classList.toggle('disabled')
}

function toggleActionButton2() {
    document.getElementById('action-btn-2').classList.toggle('disabled')
}

function toggleActionButton3() {
    document.getElementById('action-btn-3').classList.toggle('disabled')
}

function displayFirstFourCards() {
    document.getElementById('player-card-1').style.display = 'flex'
    document.getElementById('player-card-2').style.display = 'flex'
    document.getElementById('dealer-card-3').style.display = 'flex'
    document.getElementById('dealer-card-4').style.display = 'flex'
}

function displayFifthDealerCard() {
    document.getElementById('dealer-card-5').style.display = 'flex'
    setTimeout(function(){document.getElementById('dealer-card-5').style.opacity = 1}, 1000)
}

function displaySixthDealerCard() {
    document.getElementById('dealer-card-6').style.display = 'flex'
    setTimeout(function(){document.getElementById('dealer-card-6').style.opacity = 1}, 2000)
}

function displaySecondDealerCard() {
    document.getElementById('dealer-card-2').style.display = 'flex'
    setTimeout(function(){document.getElementById('dealer-card-2').style.opacity = 1}, 3000)
}

function displayFirstDealerCard() {
    document.getElementById('dealer-card-1').style.display = 'flex'
    setTimeout(function(){document.getElementById('dealer-card-1').style.opacity = 1}, 4000)
}

function setDealerCardsAndLastCardsDisplayToNone() {
    document.getElementById('dealer-card-1').style.display = 'none'
    document.getElementById('dealer-card-2').style.display = 'none'
    document.getElementById('dealer-card-3').style.display = 'none'
    document.getElementById('dealer-card-4').style.display = 'none'
    document.getElementById('dealer-card-5').style.display = 'none'
    document.getElementById('dealer-card-6').style.display = 'none'

    document.getElementById('last-player-card-1').style.display = 'none'
    document.getElementById('last-player-card-2').style.display = 'none'
    document.getElementById('last-dealer-card-1').style.display = 'none'
    document.getElementById('last-dealer-card-2').style.display = 'none'
}

async function establishTimer() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(endHand()), endTimer * 2)
    });
  
    let result = await promise;
  }
