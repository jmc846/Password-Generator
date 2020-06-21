// Assignment Code
var usableCharacters = [];
var lowerAlphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharactersArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "=", "+", "(", ")"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generatedPassword = []
var passwordLength = i > 8; i < 28;
var userPassword = Math.floor(Math.random(28) * generatedPassword.length);


function collectChars(lowerAlphabetArr) {
  for (var i = 0; i < lowerAlphabetArr.length; i++) {
    usableCharacters.push(lowerAlphabetArr[i]);
  }
};

// }}user is prompted to "generate secure password"-button appears
var generateBtn = document.querySelector("#password");
// user clicks the "generate secure password" button

// Prompt appears asking user to select password length between 8-28 character: userPromptInput
var passwordLength = prompt("select password length between 8-28 characters")
if (passwordLength < 8 || passwordLength >= 28) {
  alert("select password length between 8 & 28")

}

// Confirm appears do you want lowercase alphabets in password? Ok or cancel 
var lowerAlphabet = confirm("Do you want lowercase abc in generated password")
if (lowerAlphabet === true) {
  collectChars(lowerAlphabetArr);
};


console.log(usableCharacters)

// Confirm appears do you want uppercase alphabets in password? Ok or cancel 
var upperAlphabet = confirm("Do you want uppercase abc in generated password")
if (upperAlphabet === true) {
  collectChars(upperAlphabetArr);
};
// Confirm appears do you want numbers in password? Ok or cancel 
var numbers = confirm("Do you want numbers in generated password")
if (numbers === true) {
  collectChars(numbersArr);
};
// Confirm appears do you want special characters in password? Ok or cancel 
var specialCharacters = confirm("Do you want special characters in generated password")
if (specialCharacters === true) {
  collectChars(specialCharactersArr);
};
// password is generated based on userInputs and displayed on screen/ if not validated, alert appears stating error:

var password = collectChars(passwordLength[i])

// generate random password
function generate(collectChars) { }
for (var i = 0; i < usableCharacters.length; i++) {
  usableCharacters.push(password [i]);
}
// create for loop to choose password characters
//


  for (var i = 8; i <= 28; i++) {
    var char = Math.floor(Math.generate()
    );

    
    // add password to display
     document.getElementById("password").value = password;

    // Write password to the #password input
    // 
    // Add event listener to generate button
    generateBtn.addEventListener("click", "generate").value = textContent};
