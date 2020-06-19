// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerAlphabet = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var upperAlphabet = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
var specialCharacters =("!","@","#","$","%","^","&","*","?","=","+","(",")");
var numbers = ("0","1","2","3","4","5","6","7","8","9");
var generatedPassword = ();
var userPassword = ();
var userPassword= Math.floor(Math.random(28)*generatedPassword.length);
var randomStyle = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


need while loop

while(!validator) { passlength = parseInt(prompt("Please enter))
if (!is Nan(paslength))

// }}user is prompted to "generate secure password"-button appears
// user clicks the "generate secure password" button
// Confirm appears do you want lowercase alphabets in password? Ok or cancel 
// Confirm appears do you want uppercase alphabets in password? Ok or cancel 
// Confirm appears do you want numbers in password? Ok or cancel 
// Confirm appears do you want special characters in password? Ok or cancel 
// Prompt appears asking user to select password length between 8-28 character: userPromptInput
// password is generated based on userInputs and displayed on screen/ if not validated, alert appears stating error: