// Variable assignment code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var promptButt = document.querySelector("#promptMe");
var selectButt = document.querySelector("#selectMe");
var selectCard = document.querySelector("#selectCard");

// Event listener for the generate button
generateBtn.addEventListener("click", howtoGenerate);

// These functions control enabling and disabling the "prompt" and "select" buttons
$('#selectCard').on('shown.bs.collapse', function () {
    promptButt.removeAttribute("disabled");
    selectButt.setAttribute("disabled","");
})

$('#selectCard').on('hidden.bs.collapse', function () {
    promptButt.setAttribute("disabled","");
    selectButt.removeAttribute("disabled");
})

// This will initiate generating the password based on whether you want to use prompt or select
function howtoGenerate() {
    if (document.getElementById("promptMe").checked == true) {
        passUnifyPrompted();
    }
    if (document.getElementById("selectMe").checked == true) {
        passUnifySelected();
    }
}

// Event listener for the Copy button
copyClip.addEventListener("click", copyPass);

// Function passUnifySelected puts all of the functions together with selected criteria via the radio buttons
function passUnifySelected() {
    var passComplete = '';
    var passLength = document.getElementById("numLength").value;
    passLength = +passLength;
    var lower = document.getElementById("lowerCheck").checked;
    var upper = document.getElementById("upperCheck").checked;
    var number = document.getElementById("numberCheck").checked;
    var special = document.getElementById("specialCheck").checked;
    var errorCheck = false;
    // Criteria validation
    if (passLength < 8 || passLength > 128) {
        errorCheck = true;
        alert("Please enter a password length that is between 8 - 128 characters long.");
    }

    if (lower === false && upper === false && number === false && special === false) {
        errorCheck = true;
        alert("Please select at least one criteria for your password.");
    }

    if (errorCheck == false) {
        for (var i = 0; i < passLength; i++) {
            passComplete = passComplete + passGenerate(lower, upper, number, special);
        }
        passwordText.value = passComplete;
    }
    return;
}

// Function passUnify puts all of the functions together through the prompts
function passUnifyPrompted() {

// This do/while brings in the password length
do {
    alert("Please select your password length. Length must be between 8 to 128 characters.")
    passLength = prompt("Select password Length (8 - 128):");
    passLength = +passLength;
    if (passLength === 0) {
        break;
    }
}
while (passLength < 8 || passLength > 128);

// This do/while initiates the criteria questionnaire
do {
    if (passLength === 0) {
        break;
    }
    alert("Please select the criteria for your password. You must choose at least one option.")
    runQuestionnaire();
    }
    // This validates whether or not an option was picked
while (lower === false && upper === false && number === false && special === false);

var passComplete = '';

for (var i = 0; i < passLength; i++) {
    passComplete = passComplete + passGenerate(lower, upper, number, special);
    }
passwordText.value = passComplete;
}


// Generate functions
    // The string.fromcharcode came from an idea introduced by Florin Pop
    // This function generates a lowercase letter
function getLowerRan() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
    // This function generates an uppercase letter
function getUpperRan() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
    // This function generates a number
function getNumberRan() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
    // This function generates a special character
function getSpecialRan() {
    var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."]
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

// Prompt Questionnaire
function runQuestionnaire() {
    // These functions ask for the password criteria
lower = confirm("Do you want lower case character? (OK = yes, CANCEL = no)");
upper = confirm("Do you want upper case characters? (OK = yes, CANCEL = no)");
number = confirm("Do you want numbers? (OK = yes, CANCEL = no)");
special = confirm("Do you want special symbols? (OK = yes, CANCEL = no)");
}

// Password Processing
// This function takes the results of the promp questionnaire or selection toggles, generates random number for the selected critera, then picks one of generated values
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

//Copy password to the clipboard
function copyPass() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
