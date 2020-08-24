// Assignment Code
const usableCharacters = [];
const lowerAlphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperAlphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharactersArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "=", "+", "(", ")"];
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const generatedPassword = []
//const userPassword = Math.floor(Math.random(128) * generatedPassword.length);
const collectChars = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    usableCharacters.push(arr[i]);
  }
}
// }}user is prompted to "generate secure password"-button appears
const generateBtn = document.getElementById('generate');
// user clicks the "generate secure password" button
// generate random password

function getPasswordLength(){

  // Prompt appears asking user to select password length between 8-28 character: userPromptInput
  let passwordLength = prompt("select password length between 8-128 characters");
  while (passwordLength < 8 || passwordLength > 128) {
   alert ("select password length between 8 & 128");
   passwordLength = prompt("select password length between 8-128 characters");
    };
    return passwordLength;
}

function generate() {
  const passwordLength = getPasswordLength();
  // Confirm appears do you want lowercase alphabets in password? Ok or cancel 
  const lowerAlphabet = confirm("Do you want lowercase abc in generated password");
  if (lowerAlphabet) {
    collectChars(lowerAlphabetArr);
  };
  // Confirm appears do you want uppercase alphabets in password? Ok or cancel 
  const upperAlphabet = confirm("Do you want uppercase abc in generated password");
  if (upperAlphabet) {
    collectChars(upperAlphabetArr);
  };
  // Confirm appears do you want numbers in password? Ok or cancel 
const numbers = confirm("Do you want numbers in generated password");
  if (numbers) {
    collectChars(numbersArr);
  };
  // Confirm appears do you want special characters in password? Ok or cancel 
  const specialCharacters = confirm("Do you want special characters in generated password");
  if (specialCharacters) {
    collectChars(specialCharactersArr);
  };
  // password is generated based on userInputs and displayed on screen/ if not validated, alert appears stating error:
  console.log(usableCharacters);
  password = [];
// create for loop to choose password character
  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * usableCharacters.length);
    password.push(usableCharacters[index]);
  };
// Write password to the #password input
  password = password.join("");
  // add password to display
  document.getElementById('password').value = password;
  //   console.log("This works")
};
// Add event listener to generate button
generateBtn.addEventListener('click', generate);

// code to make end zone
$(function zoneEnd(){
var $window = $(window);
var $slideAd = $('#slideAd');
var endZone = $('#footer').offset().top-$window.height() - 500;

$window.on('scroll', function() {

if ( (endZone) < $window.scrollLeft() ) {
$slideAd.animate({'right': '0px'},250);
} else {
$slideAd.animate({'right': '-360px'},250);
}
});

 })

zoneEnd();