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

   //Ask user to input how many characters to include and check if it's a valid input.

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

  //Ask user what data types they want to include in password

  while(!dataTypeValid){
    lowercase = confirm ("Do you want to include lowercase characters?");
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


  /* Single character type passwords 
  -------------------------------------------------------------------*/

  // Generates password that only contains lowercase characters

  if(lowercase && (!uppercase && !numeric && !specialCharacter)){
    selectDataType(lowercaseString,lowercaseString.length);
  }

  // Generates password that only contains uppercase characters

  else if(uppercase && (!lowercase && !numeric && !specialCharacter)){ 
    selectDataType(uppercaseString,uppercaseString.length);
  }

  // Generates password that only contains numeric characters

  else if(numeric && (!lowercase && !uppercase && !specialCharacter)){
    selectDataType(numericValues,numericValues.length);
  }

  // Generates password that only contains special characters

  else if(specialCharacter && (!lowercase && !uppercase && !numeric)){
    selectDataType(specialCharacterValues,specialCharacterValues.length);
  }

  /* Double character type passwords 
  -------------------------------------------------------------------*/

  // Generates password that contains lowercase & uppercase characters

  else if((lowercase && uppercase) && (!numeric && !specialCharacter)){
    var lowerUpperString = lowercaseString + uppercaseString;
    selectDataType(lowerUpperString,lowerUpperString.length);
  }

   // Generates password that contains lowercase & numeric characters

  else if((lowercase && numeric) && (!uppercase && !specialCharacter)){
    var lowercaseNumeric = lowercaseString + numericValues;
    selectDataType(lowercaseNumeric,lowercaseNumeric.length);
  }

  // Generates password that contains lowercase & special characters

  else if((lowercase && specialCharacter) && (!uppercase && !numeric)){
    var lowercaseSpecial = lowercaseString + specialCharacterValues;
    selectDataType(lowercaseSpecial,lowercaseSpecial.length);
  }

  // Generates password that contains uppercase & numeric characters

  else if((uppercase && numeric) && (!lowercase && !specialCharacter)){
    var uppercaseNumeric = uppercaseString + numericValues;
    selectDataType(uppercaseNumeric, uppercaseNumeric.length);
  }

  // Generates password that contains uppercase & special characters

  else if((uppercase && specialCharacter) && (!lowercase && !numeric)){
    var uppercaseSpecialChar = uppercaseString + specialCharacterValues;
    selectDataType(uppercaseSpecialChar,uppercaseSpecialChar.length);
  }

  // Generates password that contains numeric & special characters

  else if((numeric && specialCharacter) && (!lowercase && !uppercase)){
    var numSpecialChar = numericValues + specialCharacterValues;
    selectDataType(numSpecialChar,numSpecialChar.length);
  }

  /* Triple character type passwords 
  -------------------------------------------------------------------*/

  // Generates password that contains lowercase, uppercase & numeric characters

  else if ((lowercase && uppercase && numeric) && (!specialCharacter)){
    var lowerUpperNum = lowercaseString + uppercaseString + numericValues;
    selectDataType(lowerUpperNum,lowerUpperNum.length);
  }

  // Generates password that contains lowercase, numeric & special characters

  else if ((lowercase && numeric && specialCharacter) && (!uppercase)){
    var lowerNumSpecial = lowercaseString + numericValues + specialCharacterValues;
    selectDataType(lowerNumSpecial, lowerNumSpecial.length);
  }

  // Generates password that contains numeric, special characters & uppercase

  else if ((numeric && specialCharacter && uppercase) && (!lowercase)){
    var numSpecialUpper = numericValues + specialCharacterValues + uppercaseString;
    selectDataType(numSpecialUpper, numSpecialUpper.length);
  }

  // Generates password that contains special characters, uppercase & lowercase

  else if ((specialCharacter && uppercase && lowercase) && (!numeric)){
    var specialUpperLower = specialCharacterValues + uppercaseString + lowercaseString;
    selectDataType(specialUpperLower, specialUpperLower.length);
  }

   /* Password with all data types
  -------------------------------------------------------------------*/

  else{
    var allData = specialCharacterValues + uppercaseString + lowercaseString + numericValues;
    selectDataType(allData,allData.length);
    
  }

  // Function that generates the combined string to be used to select characters at random 

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
