// Assignment code here
// create click function
// create prompt for password criteria
// create criteria for password which include length and type of characters (upper/lower, numeric, special characters)
// create loop cycle for each step
// password should be generated that meets all criteria
// display password in an alert or written somewhere on page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log ()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
