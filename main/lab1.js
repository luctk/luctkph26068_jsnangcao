//1
const player1 = []; //team1
const player2 = []; //team2

//2
//team1
const GK1 = "Neuer";
const fieldPlayer1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
player1.push(GK1, ...fieldPlayer1);
console.log("player1: ", player1);

//team2
const GK2 = "Ter Stergen";
const fieldPlayer2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
player2.push(GK2, ...fieldPlayer2);
console.log("player2: ", player2);

//3
const allPlayer = [];
allPlayer.push(...player1, ...player2);
console.log("allPlayer: ", allPlayer);

//4
const player1Final = player1;
player1Final.splice(8, 3);
player1Final.push("thiago", "coutinho", "perisic");
console.log("player1Final thay người", player1Final);

//5
const team1 = "";
const team2 = "";
const draw = "";

//6
const printGoals = () => {};
