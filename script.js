//Global constants and variables
const fullScreenBlank = "<div id='f-scrn' class='fullscreen flex-col'></div>"
const chooseElement = "<div id='choose-element' class='black-bg centered-content'></div>";
const imgSRC = "images/rps/";
const imgArray = [imgSRC + "rock_s.png",
                  imgSRC + "ice_s.png",
                  imgSRC + "earth_01_s.png",
                  imgSRC + "fire_s.png",
                  imgSRC + "grass_s.png"];
const bgArray = ["rock-bg ", "ice-bg ", "rock-bg ", "fire-bg ", "grass-bg "];
const elementDesc = ["rock: the erosive eraser",
                     "ice: the frozen fighter",
                     "earth: the birthing bruiser",
                     "fire: the flaming fanatical",
                     "grass: the dryadic danger"]

function main(){
  //Init: load player options
  $(document).ready(function(){
    $("#splash-screen-main").hide().fadeIn(500);
  });
}

function loadPlayerOptions(){

}

function loadRPSChoices(){
  var choiceContainers = [];
  var elementNames = [];
  $("body").prepend(chooseElement);
  $("#choose-element").after(fullScreenBlank);
  //$("body").prepend(fullScreenBlank);
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
    $("#f-scrn").append(choiceContainers[i]); //append images as children of container
    choiceContainers[i].appendChild(choiceImg);
    choiceContainers[i].appendChild(elementNames[i]);
    elementNames[i].appendChild(p);

    //elementNames[i].appendChild()
    console.log("Choice " + (i+1) + " appended: " + imgArray[i]);
    console.log("Container properties:\nClassname: " + choiceContainers[i].className);
    //console.log("Container array element: " + choiceContainers[i].className);
  }
  //console.log("Container choice array: " + choiceContainers.toString());
}

function cpuPlay(){

}

function playerPlay(){

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
}

main();
