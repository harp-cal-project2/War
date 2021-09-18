//MVP:
// Set up init that calls the get card function 

//  write function to Get card data from deck of cards api
    // draw 2 cards from draw cards endpoint when the user clicks on the their half deck, which is the event we are listening to. 
   // display the cards across from one another. 
 
// define a method to compare card values returned from the api response and assign values to the face cards. 

// highest card wins. Ties are just declared. 
// display result message on page AND reset the game. 



// Stretch Goals:
// make a full war game 
    //Created the winners pile and move winner’s cards to that pile. 
    // Terminate game when card run out.
    // Resolve ties. 
  // Add animations to the cards slide.



const app = {};

app.apiUrl = `https://deckofcardsapi.com/api/deck/new`;

// ?count=2`;


app.init = () => {
  app.startGame();
  app.getDeck();
}

// method to make fetch request to api
app.getDeck = () => {
  const url = new URL (`${app.apiUrl}/draw`); 
  url.search = new URLSearchParams({
    count: '2'
  });
  fetch(url).then((response) => {
    return response.json();
  })
  .then((jsonResponse) => {
    app.drawCard(jsonResponse);
  }); 
}

// function to listen for clicks on deck button
app.drawCard = (jsonResponse) => {
  const drawButton = document.querySelector('.drawCards');
  drawButton.addEventListener('click', () => {
    app.displayCards(jsonResponse);
  });
  
}
     
// function to get img data and display to page
app.displayCards = (jsonResponse) => {
  const newCard = jsonResponse.cards;
  console.log(newCard);
  const ulElement = document.createElement('ul');
  
  ulElement.innerHTML = `
    <li>
      <img src='${newCard[0].image}' alt='${newCard[0].value} of ${newCard[0].suit}'/>
    </li>
    <li>
      <img src='${newCard[1].image}' alt='${newCard[1].value} of ${newCard[1].suit}' />
    <li>
  `;

  const cardSection = document.querySelector('.displayCards');
  cardSection.append(ulElement);
  app.compareCards(newCard);
  //  console.log(newCard[0].image);
  };

  app.compareCards = (newCard) => {
    const ACE = 1;
    const jack = 11;
    const queen = 12;
    const king = 13;

    // newCard[i].value = "KING"
    //   let king = 13
    IF (newCard[0].value == "")

    let playerCardValue = parseInt(newCard[0].value);

    
    let dealerCardValue = parseInt(newCard[1].value);
    // let cardValue = parseInt(playerCard.value);

    console.log(playerCardValue)
  //  if(playerCard.parseInt(value))

  }


  
// method to start game when button is clicked
  // display card decks on page
app.startGame = () => {
  const startGameButton = document.querySelector('.startButton');
  startGameButton.addEventListener('click',()=>{
    const deckContainer = document.querySelector('.startingPoint');
    deckContainer.classList.remove('startingPoint');
    deckContainer.classList.add('deckContainer');
  });
}


 

app.init(); 