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

app.apiUrl = `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;

app.init = () => {
  app.getDeck();
}


// method to get photos from api 
app.getDeck = () => {
  // const url = new URL(galleryApp.apiUrl) 
  // url.search = new URLSearchParams({
  //   client_id: galleryApp.apiKey
  // })

  fetch(app.apiUrl).then(res => res.json())
    .then((jsonData) => {
      console.log(jsonData);
    });
}


app.init(); 