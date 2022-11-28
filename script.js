// create loop cycle for each step
// password should be generated that meets all criteria
// display password in an alert or written somewhere on page

var char = ("abcdefghijklmnopqrstuvwxyz!@#$%&");
var char2 = ("ABCDEFGHIJKLMONPQRSTUVWXY");
var char3 = ("1234567890");
var char4 = ("!@#$%&");
var passwordLength = "";
var charPrompt
var char2Prompt
var char3Prompt
var char4Prompt

function generatePassword() {
    var passwordLength = parseInt(prompt("Password must be between 8 and 128 character"));
    while ( passwordLength <= 8 || passwordLength >= 128) {
        alert("keep password length between 8-128 characters");
        var passwordLength = parseInt(prompt("Password Lenght must be between 8 and 128 character"))
    }
    alert("good choice, you password is " + passwordLength +  "characters")

    charPrompt = confirm("use lowercase letter?");
    char2Prompt = confirm("use capital letters?");
    char3Prompt = confirm("use numbers?");
    char4Prompt = confirm("use special letters?");

while (!charPrompt && !char2prompt && !char3Prompt && !char4Prompt) {
    alert("Please pick what type of characterto use, use one type at minimum")
    var charPrompt = confirm("use lowercase letter?");
    var char2Prompt = confirm("use capital letters?");
    var char3Prompt = confirm("use numbers?");
    var char4Prompt = confirm("use special letters?");
}

var results = [];

    if (charPrompt || char2Prompt || char3Prompt || char4Prompt) {
        results = results.concat(char || char2 || char3 || char4)
    }
    // // if (char2prompt) {
    //     return "ABCDEFGHIJKLMONPQRSTUVWXY"
    // }
    // if (char3Prompt) {
    //     return "1234567890"
    // }
    // if (char4Prompt) {
    //     return "!@#$%&"
    // }

console.log (results);

}

var generateBtn = document.querySelector("#generate");

function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
}

generateBtn.addEventListener("click", generatePassword);
