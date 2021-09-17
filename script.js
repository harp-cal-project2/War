// setup namespace object
// get card deck (fetch api)


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