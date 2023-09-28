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
    return "";
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

// Create arrays with each character types

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [1,2,3,4,5,6,7,8,9,0];
var specialChar = [" ",'\"',"!","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","\\","^","_","`","{","|","}","~"];

// Create an array of characters in selected characater type(s)

function createPassword(l,u,n,s){
  var password = [];
  var charList = [];
  if (l === true) {
    charList = charList.concat(lowerCase);
  };
  if (u === true){
    charList = charList.concat(upperCase);
  };
  if (n === true){
    charList = charList.concat(numeric);
  };
  if (s === true){
    charList = charList.concat(specialChar);
  };
  return charList;
};

// Execute the generate password function at the button click

function generatePassword(){
  var passLength = askLength();
  if (passLength !== ""){
    // Checks if there is at least one char type slected
    var selectedCharType = includedCharType();
    if (!selectedCharType.includes(true)){
      alert(("Select at least one character type to include."));
      return "";
    } else{
      // Generate password from the selected char types
    var baseList = createPassword(selectedCharType[0],selectedCharType[1],selectedCharType[2],selectedCharType[3]);
    var generatedPass = [];
    for (i = 0; i < passLength; i++){
      generatedPass.push(baseList[Math.floor(Math.random() * baseList.length + 1)]);
      }
      // Convert generated array to string without comma
    return generatedPass.join("");
    }
  }else{
    return "";
  };
}  