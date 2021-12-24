// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCasearr = ["A", "B"]
var lowerCasearr = ["a", "b"]
var specialCharacterarr = ["!", "@", "#"]
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var passwordarr = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var password =""
  var characterLength = prompt("How many characters do you want?");
  if (characterLength <8 || characterLength >128){
    alert("Character length must be between 8 and 128 characters");
    return ""
  }
  console.log(characterLength);
  var upperCase = confirm("Do you want capital letters?");
  if (upperCase == true) {
    passwordarr = passwordarr.concat(upperCasearr);
  }
  console.log(upperCase)
  var lowerCase = confirm("Do you want lower case letters?");
  if (lowerCase == true) {
    passwordarr = passwordarr.concat(lowerCasearr);
  }
  console.log(lowerCase)
  var specialCharacters = confirm("Do you want special characters?");
  if (specialCharacters == true) {
    passwordarr = passwordarr.concat(specialCharacterarr);
  }
  console.log(specialCharacters)
  var numberCharacter = confirm("Do you want numbers?")
  if (numberCharacter == true) {
    passwordarr = passwordarr.concat(number);
  }

  if (lowerCase == false && upperCase == false && specialCharacters == false && numberCharacter == false){
    alert("Invalid request")
    return ""
  }
  console.log(passwordarr)

for (var i = 0; i < characterLength; i++){
  var randomNumber=Math.floor(Math.random() * passwordarr.length);
  password = password.concat(passwordarr[randomNumber])
  console.log(password)
}
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


