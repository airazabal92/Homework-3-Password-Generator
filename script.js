// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  //Ask user to input how many characters to include and check whether it's a valid input

  var passwordLengthValid = false;

  while (passwordLengthValid !== true){
    
    passwordLength = prompt("How many characters would you like to include?");
    
    if(passwordLength >= 8 && passwordLength <= 128){
      passwordLengthValid = true;
    }
    else{
      passwordLengthValid = false;
    }
}

  console.log(passwordLength);
  console.log(passwordLengthValid);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
