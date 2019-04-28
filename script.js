//Global variables
const fullScreenBlank = "<div id='f-scrn' class='fullscreen flex-col'></div>"
const chooseElement = "<div id='choose-element' class='black-bg centered-content'></div>";
const imgSRC = "images/rps/";
const imgArray = [imgSRC + "rock_s.png",
                  imgSRC + "ice_s.png",
                  imgSRC + "earth_01_s.png",
                  imgSRC + "fire_s.png",
                  imgSRC + "grass_s.png"];
const bgArray = ["rock-bg ", "ice-bg ", "rock-bg ", "fire-bg ", "grass-bg "];

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
  $("body").prepend(chooseElement);
  $("#choose-element").after(fullScreenBlank);
  //$("body").prepend(fullScreenBlank);
  for(var i = 0; i < 5; i++){
    choiceContainers[i] = document.createElement("div");
    choiceContainers[i].className = bgArray[i] + "five-row centered-content flex-row";
    choiceContainers[i].id = "img-"+i;
    if(i % 2 != 0){
      choiceContainers[i].className+="-r";
    }
    var choiceImg = document.createElement("img");
    choiceImg.src = imgArray[i];
    $("#f-scrn").append(choiceContainers[i]); //append images as children of container
    document.getElementById(choiceContainers[i].id).appendChild(choiceImg);
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
