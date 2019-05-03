//Global constants and variables
const fullScreenBlank = "<div id='f-scrn' class='fullscreen flex-col'></div>"
const chooseElement = "<div id='choose-element' class='black-bg centered-content'></div>";
const jefferyTheCreditsDragon = "<div id='credits' class='black-bg centered-content'><h6 class='white'>'Game' and 'design' by Nathaniel Rodriguez. For CSE204A.</h6></div>";
const imgSRC = "images/rps/";
const imgArray = [imgSRC + "rock_s.png",
                  imgSRC + "ice_s.png",
                  imgSRC + "earth_0" + randImg() + "_s.png",
                  imgSRC + "fire_s.png",
                  imgSRC + "grass_s.png"];
const bgArray = ["rock-bg ", "ice-bg ", "rock-bg ", "fire-bg ", "grass-bg "];
const elementDesc = ["rock: the erosive eraser",
                     "ice: the frozen fighter",
                     "earth: the birthing bruiser",
                     "fire: the flaming fanatical",
                     "grass: the dryadic danger"]
var playerNum = 1;
var winner = -1; //defaults to out-of-bounds value
var twoPlayers = true;
var playerChoices = [-1, -1]; //default vaules out-of-bounds

function main(){
  //Init: load player options
  $(document).ready(function(){
    $("#splash-screen-main").hide().fadeIn(500);
  });
  //loadWinScreen(winner);
}

function loadRPSChoices(){
  var choiceContainers = [];
  var elementNames = [];
  $("body").prepend(chooseElement);
  $("#choose-element").after(fullScreenBlank);
  q = document.createElement("h6");
  r = document.createTextNode("Player " + playerNum + ", choose your element.");
  q.className = "white";
  q.appendChild(r);
  document.getElementById("choose-element").appendChild(q);
  for(var i = 0; i < 5; i++){
    choiceContainers[i] = document.createElement("div");
    choiceContainers[i].className = bgArray[i] + "five-row centered-content flex-row";
    if(i % 2 != 0){
      choiceContainers[i].className+="-r";
    }
    elementNames[i] = document.createElement("div");
    elementNames[i].className = "element-name-wrapper";
    p = document.createElement("h3");
    t = document.createTextNode(elementDesc[i]);
    p.className = "black"
    p.appendChild(t);
    var choiceImg = document.createElement("img");
    choiceImg.src = imgArray[i];
    choiceImg.id = i;
    $("#f-scrn").append(choiceContainers[i]); //append images as children of container
    choiceContainers[i].appendChild(choiceImg);
    choiceContainers[i].appendChild(elementNames[i]);
    elementNames[i].appendChild(p);
    choiceImg.addEventListener("click", function(){
      playerPlay(this.id, playerNum);
    });
    // console.log("Choice " + (i+1) + " appended: " + imgArray[i]);
    // console.log("Container properties:\nClassname: " + choiceContainers[i].className);
  }
}

function cpuPlay(){
  return Math.floor(Math.random() * imgArray.length); //0 to 4
}

function randImg(){
  return (1 + Math.floor(Math.random() * 3)); //0 to 2
}

//returns boolean
function coinFlip(){
  return (Math.floor(Math.random()*2) == 0);
}

//saw https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_addeventlistener_param
//for additional help w/ passing function parameters using addEventListener
function playerPlay(option, player){
  console.log("playerPlay(" + option +  " " + player + ")");
  if(twoPlayers && playerNum == 1){
    playerNum = 2;
    clearScreen(); //not the most efficient but it works
    console.log("Player " + player + " chose option " + option + ": " + elementDesc[option]);
    playerChoices[0] = option;
    console.log(playerChoices[0]);
    loadRPSChoices();
    $("body").append(jefferyTheCreditsDragon);
  } else if (twoPlayers){
    playerNum = 1;
    clearScreen();
    console.log("Player " + player + " chose option " + option + ": " + elementDesc[option]);
    playerChoices[1] = option;
    compareChoices(playerChoices);
    loadWinScreen(winner);
  }else{
    console.log("Player " + player + " chose option " + option + ": " + elementDesc[option]);
    playerChoices[0] = option;
    cpuChoice = cpuPlay();
    playerChoices[1] = cpuChoice;
    console.log("Computer player chose option " + cpuChoice +": " + elementDesc[cpuChoice]);
    compareChoices(playerChoices);
    clearScreen();
    loadWinScreen(winner);
  }
}

//takes the inputs from both players and determines a winner
function compareChoices(playerChoices){
  console.log("compareChoices(" + playerChoices + ")");
  switch(playerChoices[0]){ //uses strict comparison so we will compare using strings
    case "0": //rock
      //beats ice (1) and fire (3), loses to grass (4) and earth (2)
      if(playerChoices[1] == 1 || playerChoices[1] == 3){
        winner = 1; //player 1 wins
        console.log("Player 1 wins!");
      } else if(playerChoices[1] == 2 || playerChoices[1] == 4){
        winner = 2; //player 2 wins
        console.log("Player 2 wins!");
      } else{
        winner = -1;
        console.log("It's a tie!");
      }
      break;
    case "1": //ice
      //beats earth (2) and grass (4), loses to fire (3) and rock (0)
      if(playerChoices[1] == 2 || playerChoices[1] == 4){
        winner = 1;
        console.log("Player 1 wins!");
      } else if(playerChoices[1] == 0 || playerChoices[1] == 3){
        winner = 2;
        console.log("Player 2 wins!");
      } else{
        winner = -1;
        console.log("It's a tie!");
      }
      break;
    case "2": //earth
      //beats fire and rock, loses to grass and ice
      if(playerChoices[1] == 3 || playerChoices[1] == 0){
        winner = 1;
        console.log("Player 1 wins!");
      } else if(playerChoices[1] == 1 || playerChoices[1] == 4){
        winner = 2;
        console.log("Player 2 wins!");
      } else{
        winner = -1;
        console.log("It's a tie!");
      }
      break;
    case "3": //fire
      //beats ice and grass, loses to rock and ground
      if(playerChoices[1] == 1 || playerChoices[1] == 4){
        winner = 1;
        console.log("Player 1 wins!");
      } else if(playerChoices[1] == 0 || playerChoices[1] == 2){
        winner = 2;
        console.log("Player 2 wins!");
      } else{
        winner = -1;
        console.log("It's a tie!");
      }
      break;
    case "4": //grass
      //beats ground and rock, loses to fire and ice
      if(playerChoices[1] == 2 || playerChoices[1] == 0){
        winner = 1;
        console.log("Player 1 wins!");
      } else if(playerChoices[1] == 1 || playerChoices[1] == 3){
        winner = 2;
        console.log("Player 2 wins!");
      } else{
        winner = -1;
        console.log("It's a tie!");
      }
      break;
    default:
      console.log("Error! Read value is " + playerChoices[0] + " when it should be in the interval [0, 4]!");
      break;
  }
}

function loadWinScreen(winner){
  var splashScreens = [document.createElement("div"),
                       document.createElement("div")];
  splashScreens[0].id = "splash-screen-small";
  splashScreens[1].id = "splash-screen-medium";
  splashScreens[1].className = "centered-content ";
  if(twoPlayers){
    splashScreens[1].className += "blue-bg";
  } else {
    splashScreens[1].className += "purple-bg";
  }
  var cols = [document.createElement("div"),
              document.createElement("div")];
  cols[0].className = "left-col centered-content " + bgArray[playerChoices[0]];
  cols[1].className = "right-col centered-content " + bgArray[playerChoices[1]];
  splashScreens[0].appendChild(cols[0]);
  splashScreens[0].appendChild(cols[1]);

  var colImgs = [document.createElement("img"),
                 document.createElement("img")];
  colImgs[0].src = imgArray[playerChoices[0]];
  colImgs[1].src = imgArray[playerChoices[1]];
  cols[0].appendChild(colImgs[0]);
  cols[1].appendChild(colImgs[1]);

  var winnerTextContainer = document.createElement("div");
  var winText = document.createElement("h1");
  winText.className = "white";
  if(winner == -1){
    winText.innerText = "It's a tie!";
  } else {
    winText.innerText = "Player " + winner + " wins!";
  }
  winnerTextContainer.appendChild(winText);

  var endPhoto = document.createElement("div");
  endPhoto.id = "photo-end";
  endPhoto.className = "large";
  if(coinFlip()){
    var randDog = randomDog();
    randDog.className = "fill";
    endPhoto.appendChild(randDog);
  } else {
    var randCat = randomCat();
    randCat.className = "fill";
    endPhoto.appendChild(randCat);
  }

  var inspirationStation = document.createElement("div");
  inspirationStation.id = "quote-box";
  inspirationStation.className = "centered-content";
  var inspirationText = inspireMe();
  inspirationText.className = "white";
  inspirationStation.appendChild(inspirationText);

  var playAgain = document.createElement("div");
  playAgain.id = "play-again-button";
  playAgain.className = "centered-content white-bg";
  playAgain.addEventListener("click", function(){
    location.reload(); //once again w3schools saves the day
  });
  var playText = document.createElement("h5");
  playText.innerText = "Play again?";
  playAgain.appendChild(playText);

  splashScreens[1].appendChild(winnerTextContainer);
  splashScreens[1].appendChild(endPhoto);
  splashScreens[1].appendChild(inspirationStation);
  splashScreens[1].appendChild(playAgain);

  $("body").prepend(splashScreens[1]);
  $("body").prepend(splashScreens[0]);
  $("body").append(jefferyTheCreditsDragon);
}

function keepScore(){

}

//TODO: easter egg: add alec's dog
function randomDog(){
var xmlhttp = new XMLHttpRequest();
var response = ""
var dog = document.createElement("img");
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    response = JSON.parse(this.responseText);
    dog.src = response.message;
  };
}
xmlhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
xmlhttp.send();
return dog;
}

function randomCat(){
var xmlhttp = new XMLHttpRequest();
var response = ""
var cat = document.createElement("img");
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    response = JSON.parse(this.responseText);
    cat.src = response.file;
  };
}
xmlhttp.open("GET", "https://aws.random.cat/meow", true);
xmlhttp.send();
return cat;
}

function inspireMe(){
  var xmlhttp = new XMLHttpRequest();
  var response = "";
  var quote = document.createElement("h5");
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText);
      quote.innerText = response.slip.advice;
    };
  }
  xmlhttp.open("GET", "https://api.adviceslip.com/advice", true);
  xmlhttp.send();
  return quote;
}

function clearScreen(){
  //console.log("Document would be cleared here if I wrote any code to do so.");
  $("body").empty();
  //document.write();
}

function twoPlayerMode(){
  console.log("Option chosen: Two Player Mode");
  $("#splash-screen-main").fadeOut(100);
  loadRPSChoices();
}

function onePlayerMode(){
  console.log("Option chosen: Single Player Mode");
  $("#splash-screen-main").fadeOut(100);
  loadRPSChoices();
  twoPlayers = false;
}

main();
