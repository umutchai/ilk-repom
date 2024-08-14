/*console.log("Script yüklendi.");

const setayar = setInterval(yuklendi, 1000);

function yuklendi(){
    console.log("Yükleniyor");
}
*/
//clearTimeout(setayar);
const saat = setInterval(saatFunc, 1000);

function saatFunc() {
    const a = new Date();
    const b = a.toLocaleTimeString();
    document.body.innerHTML = b;
    
}


