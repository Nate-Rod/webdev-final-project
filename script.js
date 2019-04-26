//Global variables
const fullScreenBlank = "<div class='fullscreen flex-col test-box'></div>"

function main(){
  //Init: load player options
  $(document).ready(function(){
    $("#splash-screen-main").hide().fadeIn(1500);
  });
}

function loadPlayerOptions(){

}

function loadRPSChoices(){
  $("body").prepend(fullScreenBlank);
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

main();
