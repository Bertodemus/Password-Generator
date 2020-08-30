var passLength = 0;
var lower = false;
var upper = false;
var number = false;
var special = false;

do {
    alert("Please select your password length. Length must be between 8 to 128 characters.")
    passLength = prompt("Select password Length (8 - 128):");
    passLength = +passLength;
    console.log(typeof passLength);
    console.log(passLength);
}
while (passLength < 8 || passLength > 128);

do {
    alert("Please select the criteria for your password. You must choose at least one option.")
    runQuestionaire();
}
while (lower === false && upper === false && number === false && special === false);

// for (i = 0; i < passLength; i++) {
//     passGenerate(lower, upper, number, special);
//     var passComplete = passComplete + passHolder;
// }
//  console.log(passComplete);

console.log(passGenerate(lower,upper,number,special));


// Generate functions
// The string.fromcharcode came from an idea introduced by Florin Pop
function getLowerRan() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperRan() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumberRan() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSpecialRan() {
    var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."]
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

//Questionaire
function runQuestionaire() {

    lower = confirm("Do you want lower case character?");
    console.log(typeof lower);
    console.log(lower);

    upper = confirm("Do you want upper case characters?");
    console.log(typeof upper);
    console.log(upper);

    number = confirm("Do you want numbers?");
    console.log(typeof number);
    console.log(number);

    special = confirm("Do you want special symbols?");
    console.log(typeof special);
    console.log(special);
}

//Password Processing
function passGenerate(lower, upper, number, special) {
    var passArray = [];
    if (lower === true) {
        passArray.push([getLowerRan()]);
        console.log(passArray[0]);
    }

    if (upper === true) {
        passArray.push([getUpperRan()]);
        console.log(passArray[1]);
    }

    if (number === true) {
        passArray.push([getNumberRan()]);
        console.log(passArray[2]);
    }

    if (special === true) {
        passArray.push([getSpecialRan()]);
        console.log(passArray[3]);
    }
    console.log(passArray.length);
    return passArray[Math.floor(Math.random() * passArray.length)];
}



console.log(getSpecialRan());


// The string.fromcharcode came from an idea introduced by Florin Pop
// console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
// console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
// console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
// console.log(String.fromCharCode(Math.floor(Math.random() * 15) + 33));