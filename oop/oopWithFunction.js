function Game(title, genre) {
  this.title = title;
  this.genre = genre;
}

Game.prototype.play = function () {
  console.log("Let's play!");
};
Game.prototype.win = function () {
  console.log("Wow, I'm winning!");
};

const cossaks = new Game("Cossaks", "strategy");
const cS = new Game("CS: GO", "action");

console.log(cossaks);
cossaks.play();
cossaks.win();

console.log(cS);
cS.play();
cS.win();
