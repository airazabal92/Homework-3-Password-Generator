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
  var dataTypeValid = false;
  var lowercase; 
  var uppercase; 
  var numeric; 
  var specialCharacter;
  var password = "";

   //Ask user to input how many characters to include and check whether it's a valid input.

  while (!passwordLengthValid){
    
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

  //Ask user what data types they want to include in password

  while(!dataTypeValid){
    lowercase = confirm ("Do you want to include lowercase characters?");
    console.log("Lowercase: " + lowercase);
    uppercase = confirm ("Do you want to include uppercase characters?");
    numeric = confirm ("Do you want to include numeric values?");
    specialCharacter = confirm ("Do you want to include special characters?");

    //Check if user has selected at least one data type - if not, then ask user questions above again.

    if(!lowercase && !uppercase && !numeric && !specialCharacter){
      alert ("You must choose at least one data type for your password.")
      dataTypeValid = false;
    }
    else{
      dataTypeValid = true;
    }
  }

  console.log("Lowercase: " + lowercase);
  console.log("Uppercase: " + uppercase);
  console.log("Numeric: " + numeric);
  console.log("SpecialCharacter: " + specialCharacter);


  // Generates password that only contains lowercase characters

  if(lowercase && (!uppercase && !numeric && !specialCharacter)){
    selectDataType(lowercaseString,26);
  }

  // Generates password that only contains uppercase characters

  else if(uppercase && (!lowercase && !numeric && !specialCharacter)){ 
    selectDataType(uppercaseString,26);
  }

  // Generates password that only contains numeric characters

  else if(numeric && (!lowercase && !uppercase && !specialCharacter)){
    selectDataType(numericValues,10);
  }

  // Generates password that only contains special characters

  else if(specialCharacter && (!lowercase && !uppercase && !numeric)){
    selectDataType(specialCharacterValues,32);
  }

  // Generates password that contains lowercase & uppercase characters

  else if((lowercase && uppercase) && (!numeric && !specialCharacter)){
    var lowerUpperString = lowercaseString + uppercaseString;
    selectDataType(lowerUpperString,52);
  }


  function selectDataType(stringType, dataLength){

      for(i = 0; i < passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * dataLength);
        password += stringType.charAt(randomNumber);
      }
      return password;
  }

  return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
