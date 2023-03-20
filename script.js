
let addBtn = document.getElementById("addBtn");
let Games = [];

function Game(title, platform, played) {
    this.title = title;
    this.platform = platform;
    this.played = played;
}

addBtn.addEventListener("click", addGameToLibrary);

function addGameToLibrary() {
    const container = document.getElementById("container");
        container.innerHTML = "";
        //console.log(container);
        let title = document.getElementById("title").value;
        let platform = document.getElementById("platform").value;
        let played = document.getElementById("checkbox").checked;
        const game = new Game(title, platform, played);
        Games.push(game);
        displayGames();  
    }

function displayGames() {
    Games.forEach(function(game, i) {
        // Games.shift();
        let card = document.createElement("div");
        card.id = "card-"+i;
        card.setAttribute("data-id",i);
        card.className = "game-card-add";
        let cardTitle = document.createElement("div");
        cardTitle.className = "card-title-add";
        let cardPlatform = document.createElement("div");
        cardPlatform.className = "card-platform-add";
        let cardStatus = document.createElement("button");
        let cardDelete = document.createElement("button");
        cardStatus.id = "status-"+i;
        cardTitle.innerText = game.title;
        cardPlatform.innerText = game.platform;
        cardDelete.innerText = "Delete";
        cardDelete.id = "delete-btn"+i;
        cardDelete.setAttribute("data-id", i);
        card.append(cardTitle, cardPlatform, cardStatus, cardDelete)
        cardDelete.addEventListener("click", () => {
             let currentCard = document.getElementById('card-'+i);
             console.log(currentCard);
             currentCard.remove();
             delete Games[i];
         });
        if (game.played == true) {
            cardStatus.innerText = "Played";
        } else {
            cardStatus.innerText = "Not played";
        }
        cardStatus.addEventListener("click", () => {
            let currentStatus = document.getElementById("status-"+i);
            let currentObject = Games[i];
            if (currentStatus.innerText === "Played" && currentObject.played === true) {
                currentObject.played = false;
                console.log(currentObject.played);
                console.log(Games);
                currentStatus.innerText = "Not played";
            } else {
                currentObject.played = true;
                currentStatus.innerText = "Played";
                console.log(Games);
            }
        })
        container.appendChild(card);
            
                 
    })  
    }

    

  








