//0.1 document.write(); belge üzerine bir içerik eklemek için kullanılır.
//document.write("mehmet abi");

//0.2 innerHTML 
//document.body.innerHTML ="<b>mehmet abi</b>"; 
// b etiketi yazıyı kalınlaştırır.

//0.3 innerText
 //document.body.innerText = "<b>mehmet abi</b>";
 // innerText başındaki ve sonundaki taglarla beraber yazar innerHTML ile aralarındaki fark budur.

 //0.4 remove(); removeChild();
 // html dosyasındaki span nesnesini silmeye yarar.

//const spanNesnesi = document.querySelector(".spanClass");
//spanNesnesi.remove(); 
// html sayfasında div i scriptin üstüne açmak gerekiyor.

//0.5 replaceChild(); ve appendChild();
const spanUstNesnesi = document.querySelector(".span");
const yeniSpan = document.createElement("span");
yeniSpan.className = "yeniSpanClass";
spanUstNesnesi.appendChild(yeniSpan);