
let addBtn = document.getElementById("addBtn");
let Games = [];

function Game(title, platform, played) {
    this.title = title;
    this.platform = platform;
    this.played = played;
}

Game.prototype.getData = function() {
}

Game.prototype.addGame = function(){}

addBtn.addEventListener("click", () => {
    const container = document.getElementById("container");
    console.log(container);
    let title = document.getElementById("title").value;
    let platform = document.getElementById("platform").value;
    let played = document.getElementById("checkbox").checked;
    const game = new Game(title, platform, played);
    Games.push(game);  
    Games.forEach(game => {
        Games.shift();
            let card = document.createElement("div");
            card.className = "game-card-add";
            card.innerHTML = `<div class="card-title-add">${game.title}</div><div class="card-platform-add">${game.platform}</div><div class="card-played-add">${game.played}</div>`;    
            container.appendChild(card);
            console.log(Games)        
    })
    

    // console.log(Games);
    
})