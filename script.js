// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericValues = "0123456789";
var specialCharacterValues = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var passwordLengthValid = false;
  var lowercase; 
  var uppercase; 
  var numeric; 
  var specialCharacter;

   //Ask user to input how many characters to include and check whether it's a valid input.

  while (passwordLengthValid !== true){
    
    passwordLength = prompt("How many characters would you like to include?");
    
    if(passwordLength >= 8 && passwordLength <= 128){
      passwordLengthValid = true;
    }
    else{
      alert ("That is not a valid input. Please select between 8 and 128 characters.");
      passwordLengthValid = false;
    }
}

  console.log(passwordLength);
  console.log(passwordLengthValid);

  lowercase = confirm ("Do you want to include lowercase characters?");

  console.log(lowercase);

  uppercase = confirm ("Do you want to include uppercase characters?");

  console.log(uppercase);

  numeric = confirm ("Do you want to include numeric values?");

  console.log(numeric);

  specialCharacter = confirm ("Do you want to include special characters?");

  console.log(specialCharacter);

  while (passwordCreator.length !== passwordLength){

  }







}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
