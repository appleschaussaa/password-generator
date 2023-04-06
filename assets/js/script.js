// Variables to be used later on
var char = ["abcdefghijklmnopqrstuvwxyz"];
var char2 = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var char3 = ["1234567890"];
var char4 = ["!@#$%&"];
var passwordLength = "";
var charPrompt;
var char2Prompt;
var char3Prompt;
var char4Prompt;
var choice = "";
var characters = "";
var generateBtn = document.querySelector("#generate");

// This function sets up the perameters that make up the password
function generatePassword() {
    // used to help set the boundaries for the preferred length
    var passwordLength = parseInt(
        prompt("Password must be between 8 and 128 character")
    );

    while (passwordLength <= 8 || passwordLength >= 128) {
        alert("keep password length between 8-128 characters");
        var passwordLength = parseInt(
            prompt("Password Length must be between 8 and 128 character")
        );
    } 
    alert(
        "good choice, your password will be " + passwordLength + " characters long"
    );
    console.log(passwordLength);

// This helps cycles throught the choice for what should be included in the password
    while (!charPrompt && !char2Prompt && !char3Prompt && !char4Prompt) {
        alert("Please pick what type of characters to use, you must use at least one type");
        var charPrompt = confirm("use lowercase letter?");
        var char2Prompt = confirm("use capital letters?");
        var char3Prompt = confirm("use numbers?");
        var char4Prompt = confirm("use special letters?");
    }

    // bassed off of the criteria selected it will included only the ones the user selected
    if (charPrompt == true) {
        choice = char
        } else {choice != char};

    if (char2Prompt == true) {
        choice = choice + char2
        } else {choice != char2};

    if (char3Prompt == true) {
        choice = choice + char3
        } else {choice != char3};

    if (char4Prompt == true) {
        choice = choice + char4
        } else {choice != char4};

    console.log(choice);

    // this will allow the choices and length selected to be randomly sorted into a string
    for (var i = 0; i < passwordLength; i++) {
        characters += choice.charAt(Math.floor(Math.random() * choice.length));
    }
    return characters;
};

// This function will take the outcome of the generated function and insert it into the password prompt
function writePassword() {
    var randomPassword = generatePassword();
    passwordDisplay = document.querySelector("#password");
    passwordDisplay.value = randomPassword;
    console.log("your password is " + randomPassword);
};

generateBtn.addEventListener("click", writePassword);
