document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\pizza.png'
      },
      {
        name: 'milkshake',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\hotdog.png'
      },
      {
        name: 'fries',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\pizza.png'
      },
      {
        name: 'milkshake',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'C:\Users\LENOVO\Desktop\End_Term_1\images\hotdog.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.play')
    const resultDisplay = document.querySelector('#res')
    let ChosenCards = []
    let ChosenCardsId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'C:\Users\LENOVO\Desktop\End_Term_1\images\blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = ChosenCardsId[0]
      const optionTwoId = ChosenCardsId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'C:\Users\LENOVO\Desktop\End_Term_1\images\blank.png')
        cards[optionTwoId].setAttribute('src', 'C:\Users\LENOVO\Desktop\End_Term_1\images\blank.png')
        alert('You have clicked the same image!')
      }
      else if (ChosenCards[0] === ChosenCards[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'C:\Users\LENOVO\Desktop\End_Term_1\images\white.png')
        cards[optionTwoId].setAttribute('src', 'C:\Users\LENOVO\Desktop\End_Term_1\images\white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(ChosenCards)
      } else {
        cards[optionOneId].setAttribute('src', 'C:\Users\LENOVO\Desktop\End_Term_1\images\blank.png')
        cards[optionTwoId].setAttribute('src', 'C:\Users\LENOVO\Desktop\End_Term_1\images\blank.png')
        alert('Sorry, try again')
      }
      ChosenCards = []
      ChosenCardsId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      ChosenCards.push(cardArray[cardId].name)
      ChosenCardsId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (ChosenCards.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })