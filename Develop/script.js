//Define your variables
var passwordChar=""
var specialChar= "!@#$%^&*_-=+";
var number= "0123456789";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase= "abcdefghijklmnopqrstuvwxyz";


//Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var result="";
  var passwordLength= window.prompt ("Select Password length between 8-128 characters. How many would you like yours to contain?");
  if (passwordLength<8) {
    window.alert ("password less than 8 characters!");
    writePassword();
    return"";
  }

  else if (passwordLength>128){
    window.alert ("password cannot be longer than 128 characters");
    writePassword();
    return"";
  }

  console.log (passwordLength);

  //Rules for Password setup
  var upper= window.confirm ("Do you want upper case letters?");
    if (upper) {
      passwordChar+=upperCase;
      console.log (upper);
    }
  
  //lowercase setup
  var lower= window.confirm ("Do you want lower case letters?");
    if (lower){
      passwordChar+=lowerCase;
      console.log (lower);
    }
  
  //number setup
  var numbers= window.confirm ("Do you want to include numbers?");
  if (numbers){
    passwordChar+=number;
    console.log (numbers);
  }
  
  //special characters
  var special= window.confirm ("Do you want to include special characters?");
    if (special){
      passwordChar+=specialChar;
      console.log (special);
    }

  // password for loop
  for (var i = 0; i <passwordLength; i++){
    var randomNumber=Math.floor(Math.random()*passwordChar.length);
      finalResult+=passwordChar[randomNumber];
      console.log (passwordChar[randomNumber]);
    }

//Password generation
  var password = finalResult;
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


