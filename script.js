
axios
  .get("https://lanciweb.github.io/demo/api/pictures/")
  .then((resp) => {
    const cards = resp.data;
     console.log(cards);

    const cardsElem = document.getElementById('card-container');
    cardsElem.innerHTML = '';

    cards.forEach(card => {
        const {url, title, date} = card;
       
        

       cardsElem.innerHTML +=  
                    `<div class="col">
                    <div class="card">
                       <div> <img class="pin" src="./img/pin.svg" alt="pin"> </div>
                       <div> <img class="first-image" src="${url}" alt="${title}"> </div>
                       <div> <p>${date}</p> 
                        <h2 class="title-2">${title}</h2> </div>
                    </div>
                    </div>`; 
    });
  });

