// Starter code (this generates the button)
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
    console.log("Button working")
// 1. Prompt user for critera (pw length, char type)
// 2. Validate input (between 8 - 128 and at least one char type)
// 3. Generate pw

var userChoice1 = window.prompt("Chose length between 8 and 120 characters");
var userChoice2 = window.prompt("Chose if lower case")
var userChoice3 = window.prompt("Chose if upper case");
var userChoice4 = window.prompt("Chose if number");
var userChoice5 = window.prompt("Chose if special character");

// 4. Display pw

    return "password";
  }

// Write password to the #password input (needs generatePassword function to display to screen)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (on click writes password)
generateBtn.addEventListener("click", writePassword);
