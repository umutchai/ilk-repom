// TODO 6 = perfect number --> 1,2,3 = 6 -----> Perfect Number


/*function isPerfectNumber(number){
    if(number <= 1){
        return false;
    }
    let sum = 0;
    for(let i = 0; i < number; i++){
        if(number % i === 0){
            sum += i;
        }
    }
    return sum === number;
}
let number = parseInt(prompt("Lütfen bir sayı giriniz: "));
if(isNaN(number)){
    alert("Geçerli bir sayı giriniz !");
}
else{
    if(isPerfectNumber(number)){
        alert(number + "  mükemmel bir sayıdır.");
    }
    else{
        alert(number + " mükemmel bir sayı değildir");
    }
}*/

// ? Decimal to Binary Conversion
// function decimalToBinary(decimal) {
//     if (decimal === 0) return "0";

//     let binary = "";

//     while (decimal > 0) {
//         binary = (decimal % 2) + binary;
//         decimal = Math.floor(decimal / 2);
//     }

//     return binary;
// }


// let decimalNumber = parseInt(prompt("Please enter a decimal number:"));

// if (isNaN(decimalNumber)) {
//     alert("Please enter a valid number.");
// } else {
//     let binaryResult = decimalToBinary(decimalNumber);
//     alert("The binary equivalent of " + decimalNumber + " is: " + binaryResult);
// }


