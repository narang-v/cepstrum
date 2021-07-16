document.getElementsByClassName("open_button")[0].addEventListener("click",function(){
    document.querySelector(".popup-bg").style.display="flex";
});
document.getElementsByClassName("close")[0].addEventListener("click",function(){
    document.querySelector(".popup-bg").style.display="none";
});