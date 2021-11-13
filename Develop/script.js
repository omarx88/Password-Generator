//Define your variables

var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var specialChar= "!@#$%^&*_-=+";
var number= "0123456789"

//Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var result="";
  var passwordLength= window.prompt ("Select Password from between 8-128 characters. How many would you like yours to contain?");
  if (passwordLength<8) {
    window.alert ("password less than 8 characters!");
    writePassword();
    return"";
  }

  else if (passwordLength>128){
    window.alert ("password cannot be longer than 128 characters");
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













/* Assignment Code
var generateBtn = document.querySelector("#generate");


/ declare variables for each element

var password = document.getElementById("password");

var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-=+";
var passwordLength = 12;
var password = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}
*/