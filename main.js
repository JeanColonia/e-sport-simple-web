
const modal=document.getElementById("modal-container");
const close=document.getElementById("close-icon");

const btn=document.querySelector("#button_id");
const btn2=document.querySelector("#playfree2");


$( document ).ready(function() {
    var video = document.getElementById('video');
    video.autoplay = true;
    video.load();
});



btn.onclick=()=>{
    openModal();
}
btn2.onclick=()=>{
    openModal();
}
function openModal(){
    modal.style.display="block";
}

function closeModal(){
    modal.style.display="none";
}


window.onclick= function(e){
    if(e.target==modal){
        modal.style.display="none";
    }
}

close.onclick=()=>{
    closeModal();
}



