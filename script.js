
// create prompt for password criteria
// create criteria for password which include length and type of characters (upper/lower, numeric, special characters)
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

var charPrompt = confirm("use lowercase letter?");
var char2prompt = confirm("use capital letters?");
var char3Prompt = confirm("use numbers?");
var char4Prompt = confirm("use special letters?");

while (charPrompt & char2prompt & char3Prompt & char4Prompt) {
    
}

var results = [];



console.log (results);

}

var generateBtn = document.querySelector("#generate");

function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
}

generateBtn.addEventListener("click", generatePassword);
