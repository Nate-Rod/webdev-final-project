//Global constants and variables
const fullScreenBlank = "<div id='f-scrn' class='fullscreen flex-col'></div>"
const chooseElement = "<div id='choose-element' class='black-bg centered-content'></div>";
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
var twoPlayers = true;
var playerChoices = [-1, -1]; //default vaules out-of-bounds

function main(){
  //Init: load player options
  $(document).ready(function(){
    $("#splash-screen-main").hide().fadeIn(500);
  });
}

// function loadPlayerOptions(){
//
// }

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
    console.log("Choice " + (i+1) + " appended: " + imgArray[i]);
    console.log("Container properties:\nClassname: " + choiceContainers[i].className);
  }
}

function cpuPlay(){
  return Math.floor(Math.random() * imgArray.length); //0 to 4
}

function randImg(){
  return (1 + Math.floor(Math.random() * 3)); //0 to 2
}

//see https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_addeventlistener_param
//for additional help w/ passing function parameters using addEventListener
function playerPlay(option, player){
  console.log("playerPlay(" + option +  " " + player + ")");
  if(twoPlayers && playerNum == 1){
    playerNum = 2;
    clearScreen(); //not the most efficient but it works
    console.log("Player " + player + " chose option " + option + ": " + elementDesc[option]);
    //loadRPSChoices();
  } else if (twoPlayers){
    playerNum = 1;
    clearScreen();
    console.log("Player " + player + " chose option " + option + ": " + elementDesc[option]);
    //loadRPSChoices();
  }else{
    console.log("Player " + player + " chose option " + option + ": " + elementDesc[option]);
    console.log("If I wrote code for it, the CPU would play here.")
    //cpuPlay();
  }
}

//takes the inputs from both players and determines a winner
function compareChoices(){

}

//loads the win screen with the winner of the match in the center:
//both players' choices are displayed in the left and right sides of the screen
//a cat photo is in the center (pulled from API) along an inspirational quote
//"Play again?" at the bottom-center to start the game over again
function loadWinScreen(winner){

}

function clearScreen(){
  console.log("Document would be cleared here if I wrote any code to do so.");
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
