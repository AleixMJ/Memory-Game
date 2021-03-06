document.addEventListener('DOMContentLoaded', () => {
 //card options
 const cardArray = [
      {
        name: 'lion1',
        img: 'images/lion1.jpg'
      },
      {
        name: 'lion1',
        img: 'images/lion1.jpg'
      },
      {
        name: 'lion2',
        img: 'images/lion2.jpg'
      },
      {
        name: 'lion2',
        img: 'images/lion2.jpg'
      },
      {
        name: 'lion3',
        img: 'images/lion3.jpg'
      },
      {
        name: 'lion3',
        img: 'images/lion3.jpg'
      },
      {
        name: 'cub1',
        img: 'images/cub1.jpg'
      },
      {
        name: 'cub1',
        img: 'images/cub1.jpg'
      },
      {
        name: 'cub2',
        img: 'images/cub2.jpg'
      },
      {
        name: 'cub2',
        img: 'images/cub2.jpg'
      },
      {
        name: 'cub3',
        img: 'images/cub3.jpg'
      },
      {
        name: 'cub3',
        img: 'images/cub3.jpg'
      }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert(' You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert(' Nicely done!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert(' Try harder')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = ' Amazing! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  