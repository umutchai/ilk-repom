/*var ilkElement = document.querySelector("li");

ilkElement.addEventListener("mouseover",function(){
        this.style.color = "blue";



});
ilkElement.addEventListener("mouseout",function(){
    this.style.color = "black";



});*/

var elementler = document.querySelectorAll("li");
for(var i = 0; i < elementler.length; i++ ){
    elementler[i].addEventListener("mouseover",function(){
        this.style.color = "blue";
});
};
for(var i = 0; i < elementler.length; i++ ){
    elementler[i].addEventListener("mouseout",function(){
        this.style.color = "black";
     
});
elementler[i].addEventListener("click",function(){
    this.classList.toggle("benimClass");
});
};
