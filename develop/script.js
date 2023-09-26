// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* Adding my own javascript codes from here */

// Ask the length of the password

function askLength(){
  var length = prompt("Choose the password length. It needs to be at least 8 characters and no more than 128 characters.", "");
  if (length > 7 && length < 128){
    return length
  } else {
    alert("Your input is invalid. Add password length between 8 and 127.")
    return null;
  }
}

// Check if user wants to include lowercase, uppercase, numeric, and/or special characters
function includedCharType(){
  var hasLowercase = confirm("Do you want to include lowercase to your password? Select OK if Yes, select Cancel if not.");
  var hasUppercase = confirm("Do you want to include uppercase to your password? Select OK if Yes, select Cancel if not.");
  var hasNumeric = confirm("Do you want to include numeric to your password? Select OK if Yes, select Cancel if not.");
  var hasSpecialChar = confirm("Do you want to include special characters to your password? Select OK if Yes, select Cancel if not.");
  return [hasLowercase, hasUppercase, hasNumeric, hasSpecialChar];
}

// Generate password based on the users' input

// Execute the generate password function at the button click

function generatePassword(){
  if (askLength() !== null){
    console.log(includedCharType());
  }
}  