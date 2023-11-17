var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500);
    play();
}

var checkDead = setInterval(function(){
    var characterTop =  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =  parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        character.style.display="none";
        block.style.display="none";
        playStop();
        endsound();
        overtxt = "Ayyohh Kallooooo!!";
        document.getElementById('overtxt').innerHTML= overtxt;
    }
},10)

function start(){
    location.reload();
}


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
function playStop(){
    audio.pause();
}
function endsound(){
    var catsound = document.getElementById("catsound");
    catsound.play();
}
