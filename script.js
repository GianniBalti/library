
let addBtn = document.getElementById("addBtn");
let Games = [];
let gameCounter = 0;

function Game(title, platform, played,id) {
    this.id = id;
    this.title = title;
    this.platform = platform;
    this.played = played;
}

addBtn.addEventListener("click", submitForm);

function submitForm() {
    if (Games.length === 0) {
        gameCounter = 1;
    }
    let form = document.getElementById("gameForm");
    let title = document.getElementById("title").value;
    let platform = document.getElementById("platform").value;
    let played = document.getElementById("checkbox").checked;
    let id = gameCounter;
    const game = new Game(title, platform, played, id);
    //console.log(game);

    addGameToLibrary(game);
    gameCounter++;
    form.reset();
    
}

function addGameToLibrary(g) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    Games.push(g);
    // console.log(Games);
    // console.log(Games.length);
    // console.log(gameCounter);
    //create div elements for each game
    Games.forEach(g => {
        let gameCard = document.createElement("div");
        let gameId = document.createElement("div");
        let gameTitle = document.createElement("div");
        let gamePlatform = document.createElement("div");
        let gamePlayed = document.createElement("button");
        let gameDelete = document.createElement("button");
        //add classes to elements;
        gameCard.className = "game-card-add";
        gameCard.dataset.key = g.id;
        console.log(gameCard);
        gameId.className = "card-id-add";
        gameTitle.className = "card-title-add";
        gamePlatform.className = "card-platform-add";
        //adds values to the elements
        gameId.innerText = g.id;
        gameTitle.innerText = g.title;
        gamePlatform.innerText = g.platform;
        if (g.played == true) {
            gamePlayed.innerText = "Played";
            gamePlayed.className = "played-btn";
        } else {
            gamePlayed.innerText = "Not played";
            gamePlayed.className = "not-played";

        }
        gamePlayed.dataset.id = g.id;
        gameDelete.innerText = "Remove";
        gameDelete.dataset.id = g.id;
        gameDelete.className = "delete-btn";
        //delete's game from dom and from array
        gameDelete.addEventListener("click", () => {
            for (let i = 0; i < Games.length; i++) {
                if (Games[i].id.toString() === gameDelete.dataset.id) {
                    let toDelete = document.querySelector(`[data-key='${gameDelete.dataset.id}']`);
                    toDelete.remove();
                    Games.splice(i,1);
                }               
            }
        })
        gamePlayed.addEventListener("click", () => {
            let currentStatus = gamePlayed;
            for (let i = 0; i < Games.length; i++) {
                if (Games[i].id.toString() === currentStatus.dataset.id) {
                    let currentObject = Games[i];
                    if (currentObject.played === false && currentStatus.innerText === "Not played") {
                        currentObject.played = true;
                        currentStatus.innerText = "Played";
                        currentStatus.className = "played-btn";
                    } else {
                        currentObject.played = false;
                        currentStatus.innerText = "Not played";
                        currentStatus.className = "not-played";
                    }
                    console.log(currentObject);
                    console.log(currentStatus);
                    console.log(currentStatus.innerText);
                }
            }; 
        })
        gameCard.append(gameId,gameTitle,gamePlatform,gamePlayed,gameDelete);
        container.appendChild(gameCard);
    })
    
}










