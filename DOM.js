/*var button = document.querySelector("button");
var isRed = false;

button.addEventListener("click", function(){
    if(isRed == true){
        document.body.style.background ="white";}
    else{
        document.body.style.background = "red";
    }
    isRed = !isRed;
});*/

var button = document.querySelector("button");

button.addEventListener("click", function(){
    document.body.classList.toggle("white");
});
