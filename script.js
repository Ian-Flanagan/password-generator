// Assignment code here

// Get references to the #generate element
// variables declared at top of JS
var generateBtn = document.querySelector("#generate");
var length;
var uppers;
var lowers;
var numbers;
var specials;
var uppercaseLettersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseLettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
];

function passwordLength() {
  length = prompt("Your password must be a number between 8 and 128");

  if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128");

    passwordLength();
  }
  return length;
}

function passwordOptions() {
  lowers = confirm("Do yo want lowercase letters in your password?");
  uppers = confirm("Do you want upper case letters in your password?");
  numbers = confirm("Do you want numbers in your password?");
  specials = confirm("Do you want special characters in your password?");

  // if ((!lowers) && (!uppers) && (!numbers) && (!specials)) {
  if (
    lowers === false &&
    uppers === false &&
    numbers === false &&
    specials === false
  ) {
    alert("You must choose at least one");
    passwordOptions();
  }
  return lowers, uppers, numbers, specials;
}

function generatePassword() {
  passwordLength();
  passwordOptions();

  var passwordGenArray = [];
  var guaranteed = [];
  var randomNum;
  var randomChar;

  if (lowers) {
    // pick one random character from lowercaseLettersArray and add it to the guaranteed array
    randomNum = Math.floor(Math.random() * lowercaseLettersArray.length); // gives you a random number between 0 and 26
    randomChar = lowercaseLettersArray[randomNum];
    guaranteed.push(randomChar) // ["o"]
    passwordGenArray = passwordGenArray.concat(lowercaseLettersArray);
  }
  
  if (uppers) {
    // pick one random character from uppercaseLettersArray and add it to the guaranteed array
    randomNum = Math.floor(Math.random() * uppercaseLettersArray.length); // gives you a random number between 0 and 26
    randomChar = uppercaseLettersArray[randomNum];
    guaranteed.push(randomChar) // ["o", "J"]
    passwordGenArray = passwordGenArray.concat(uppercaseLettersArray);
  }
  
  if (numbers) {
    // pick one random character from numbersArray and add it to the guaranteed array
    randomNum = Math.floor(Math.random() * numbersArray.length); // gives you a random number between 0 and 10
    randomChar = numbersArray[randomNum];
    guaranteed.push(randomChar) // ["o", "J", "7"]
    passwordGenArray = passwordGenArray.concat(numbersArray);
  }
  
  if (specials) {
    // pick one random character from specialCharactersArray and add it to the guaranteed array
    randomNum = Math.floor(Math.random() * specialCharactersArray.length); // gives you a random number between 0 and 15
    randomChar = specialCharactersArray[randomNum];
    guaranteed.push(randomChar) // ["o", "J", "7", "&"]
    passwordGenArray = passwordGenArray.concat(specialCharactersArray);
  }

  console.log(passwordGenArray);
  console.log(guaranteed); // ["o", "J", "7", "&"]

  var password = ""; //"oJ7&"

  for (var i = 0; i < length - guaranteed.length; i++) {
    var randomNumber = Math.floor(Math.random() * passwordGenArray.length);
    var randomCharacter = passwordGenArray[randomNumber];
    password = password + randomCharacter;
    console.log(password);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var animals = ["dog" ,"cat", "chicken", "mouse"];

animals[3]

passwordGenArray = ["a", "b", "c"];
var index = 0;
passwordGenArray[index]