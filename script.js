/* GLOBAL VARIABLE DEFINITIONS
----------------------------------------------------------- */

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

/* EVENT LISTENER
----------------------------------------------------------- */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* FUNCTIONS
----------------------------------------------------------- */

// Call back function to write password to the #password iuput
function writePassword() {

  // 1. Call YourFuncToGeneratePwd
  var password = generatePassword();

  // 2. Grab #password html tag
  var passwordText = document.querySelector("#password");

  // 3. Update the value of the tag
  passwordText.value = password;
}

// Function to generate password with user input
function generatePassword() {
  //
  // DATA STRUCTURE
  //
  // 1. Varialable to store user input object by calling yourFuncForUserInput
  var userCharVal = yourFuncForUserInput();

  // 2. An empty array for result to store password as it's being concatenated later
  var finalPassword = [];

  // 3. Array to store all eligible/possible characters of different types based on by user input
  var possibleCharacters = [];

  // 4. Array to contain one of each type of chosen character to ensure each will be used and guaranteed
  var guaranteedCharacters = [];

  // 5. Random guaranteed character
  var randomGuaranteedChar;

  // MAIN LOGIC
  //
  // 1a. Conditional statement that adds array of special characters into array of possible characters based on user input
  if (userCharVal.specialChar){
    possibleCharacters.push(specialCharacters);

    // 1b. Push new random special character to guaranteedCharacters
    randomGuaranteedChar = yourFuncForRandomChar(possibleCharacters[possibleCharacters.length-1]);

    guaranteedCharacters.push(randomGuaranteedChar);
  }

  // 2a. Conditional statement that adds array of numeric characters into array of possible characters based on user input

  if (userCharVal.numChar){
    possibleCharacters.push(numericCharacters);

   // 2b. Push new random number to guaranteedCharacters
   randomGuaranteedChar = yourFuncForRandomChar(possibleCharacters[possibleCharacters.length-1]);

    guaranteedCharacters.push(randomGuaranteedChar);
  }

  // 3a. Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  if (userCharVal.lowerChar){
    possibleCharacters.push(lowerCasedCharacters);

    // 3b. Push new random lower-cased character to guaranteedCharacters

    randomGuaranteedChar = yourFuncForRandomChar(possibleCharacters[possibleCharacters.length-1]);

    guaranteedCharacters.push(randomGuaranteedChar);
  }
    
  // 4a. Conditional statement that adds array of uppercase characters into array of possible characters based on user input

  if (userCharVal.upperChar){
    possibleCharacters.push(upperCasedCharacters);

  // 4b. Push new random upper-cased character to guaranteedCharacters

    randomGuaranteedChar = yourFuncForRandomChar(possibleCharacters[possibleCharacters.length-1]);

    guaranteedCharacters.push(randomGuaranteedChar);
  }

  // 5. For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable

  for (i = 0; i < ((userCharVal.password) - (possibleCharacters.length)); i++){

    //Send possibleCharacters array to yourFuncForRandomChar to select a random index within the possibleCharacters array and return the array that is in that index
    var randomArray = yourFuncForRandomChar(possibleCharacters);
  
    //Send random array chosen from possibleCharacters back to yourFuncForRandomChar to get back one value

    var randomIndexVal = yourFuncForRandomChar(randomArray);

    //Push that single value to the finalPassword array
    finalPassword.push(randomIndexVal);
  }

  // 6. Mix in at least one of each guaranteed character in the result
  finalPassword = finalPassword.concat(guaranteedCharacters);

  // 7. Transform the result into a string and pass into writePassword and return it to the caller
  return finalPassword.join('');
}

// Function to prompt user for password options
function yourFuncForUserInput() {
  // 1. Variable to store length of password from user input
  var passwordLength = prompt("How many characters would you like to include?");

  // 2. Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (!(passwordLength >= 8 && passwordLength <= 128)){
    alert("That is not a valid input. Please enter between 8 and 128 characters.");
    return;
  }

  // 3. Variable to store boolean regarding the inclusion of special characters
  var specialCharacter = confirm ("Do you want to include special characters?");

  // 4. Variable to store boolean regarding the inclusion of numeric characters
  var numeric = confirm ("Do you want to include numeric values?");

  // 5. Variable to store boolean regarding the inclusion of lowercase characters
  var lowercase = confirm ("Do you want to include lowercase characters?");

  // 6. Variable to store boolean regarding the inclusion of uppercase characters
  var uppercase = confirm ("Do you want to include uppercase characters?");

  // 7. Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if(!lowercase && !uppercase && !numeric && !specialCharacter){
    alert ("You must choose at least one data type for your password. Please try again.")
    return;
  }

  // 8. Object to store user input
  var userInput = {specialChar: specialCharacter, numChar: numeric, lowerChar: lowercase, upperChar: uppercase, password: passwordLength};

  // 9. return user-input-object
  return userInput;
}

// Function for getting a random element from an array
function yourFuncForRandomChar(arr) {
  // 1. Generate random number range from 0 to (arr.length)
  var randomNumber = Math.floor(Math.random() * arr.length);

  // 2. Variable to store the element in arr using random number as index
  var randomElement = arr[randomNumber];

  // 3. return random elment in arr
  return randomElement;
}




