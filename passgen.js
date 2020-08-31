//Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passLength = 0;
var lower = false;
var upper = false;
var number = false;
var special = false;

// Event listener for the generate button
generateBtn.addEventListener("click", passUnify);

// Event listener for the Copy button
copyClip.addEventListener("click", copyPass);

// Function passUnify puts all of the functions together
function passUnify() {

        //this do/while brings in the password length
    do {
        alert("Please select your password length. Length must be between 8 to 128 characters.")
        passLength = prompt("Select password Length (8 - 128):");
        passLength = +passLength;
         //this if statement allows the usert to break out of the loop if they 'escape' past the initial prompt or select a value of 0
        if (passLength === 0) {
            break;
        }
    }
    while (passLength < 8 || passLength > 128);

        //this do/while initiates the criteria questionnaire
    do {
            //This if statement finishes breaking out of the loop if the user were to 'escape' the initial prompt
        if (passLength === 0) {
            break;
        }
        alert("Please select the criteria for your password. You must choose at least one option.")
        runQuestionnaire();
    }
        //this validates whether or not an option was picked
    while (lower === false && upper === false && number === false && special === false);

        //this variable and for loop creates the password; then it is passed along to the page
    var passComplete = '';
    for (i = 0; i < passLength; i++) {
        passComplete = passComplete + passGenerate(lower, upper, number, special);
    }
    passwordText.value = passComplete;

}

// Generate functions
    // The string.fromcharcode came from an idea introduced by Florin Pop
    //this function generates a lowercase letter
function getLowerRan() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
    //this function generates an uppercase letter
function getUpperRan() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
    //this function generates a number
function getNumberRan() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
    //this function generates a special character
function getSpecialRan() {
    var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."]
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

//Questionnaire
function runQuestionnaire() {
        //these functions ask for the password criteria
    lower = confirm("Do you want lower case character?");
    upper = confirm("Do you want upper case characters?");
    number = confirm("Do you want numbers?");
    special = confirm("Do you want special symbols?");
}

//Password Processing
//this function takes the results of the questionnaire, generates random number for the selected critera, then picks one of generated values
function passGenerate(lower, upper, number, special) {
    var passArray = [];
    if (lower === true) {
        passArray.push([getLowerRan()]);
    }

    if (upper === true) {
        passArray.push([getUpperRan()]);
    }

    if (number === true) {
        passArray.push([getNumberRan()]);
    }

    if (special === true) {
        passArray.push([getSpecialRan()]);
    }
    return passArray[Math.floor(Math.random() * passArray.length)];
}

//Copying Text to the clipboard
function copyPass() {

    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  
    alert("Copied the text: " + copyText.value);
  }
