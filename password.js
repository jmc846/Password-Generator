// Assignment Code
var usableCharacters = [];
var lowerAlphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharactersArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "=", "+", "(", ")"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generatedPassword = []

var userPassword = Math.floor(Math.random(28) * generatedPassword.length);


function collectChars(arr) {
  for (var i = 0; i < arr.length; i++) {
    usableCharacters.push(arr[i]);
  }
}

// }}user is prompted to "generate secure password"-button appears
var generateBtn = document.getElementById('generate');
// user clicks the "generate secure password" button


// generate random password
function generate() {

  // Prompt appears asking user to select password length between 8-28 character: userPromptInput
  var passwordLength = prompt("select password length between 8-28 characters")
  if (passwordLength < 8 || passwordLength >= 28) {
    alert("select password length between 8 & 28")

  }

  // Confirm appears do you want lowercase alphabets in password? Ok or cancel 
  var lowerAlphabet = confirm("Do you want lowercase abc in generated password")
  if (lowerAlphabet) {
    collectChars(lowerAlphabetArr);
  };

  // Confirm appears do you want uppercase alphabets in password? Ok or cancel 
  var upperAlphabet = confirm("Do you want uppercase abc in generated password")
  if (upperAlphabet) {
    collectChars(upperAlphabetArr);
  };
  // Confirm appears do you want numbers in password? Ok or cancel 
  var numbers = confirm("Do you want numbers in generated password")
  if (numbers) {
    collectChars(numbersArr);
  };
  // Confirm appears do you want special characters in password? Ok or cancel 
  var specialCharacters = confirm("Do you want special characters in generated password")
  if (specialCharacters) {
    collectChars(specialCharactersArr);
  };
  // password is generated based on userInputs and displayed on screen/ if not validated, alert appears stating error:
  console.log(usableCharacters);

  password = [];

  for (var i = 0; i <= passwordLength; i++) {
    var index = Math.floor(Math.random() * usableCharacters.length);
    password.push(usableCharacters[index])
  };

  password = password.join("");

  // add password to display
  document.getElementById('password').value = password;
  //   console.log("This works")
};
// create for loop to choose password characters



// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener('click', generate);