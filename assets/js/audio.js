document.addEventListener("DOMContentLoaded", function(){
const btnaudio = document.getElementById("btn-audio");
const audio=document.getElementById("audio");
const icon=document.getElementById("iconplay");


btnaudio.addEventListener("click", function(){
    if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play")
        icon.classList.add("fa-pause");	
    }
    else{
        audio.pause();
        icon.classList.remove("fa-pause");	
        icon.classList.add("fa-play")
    }
})

})